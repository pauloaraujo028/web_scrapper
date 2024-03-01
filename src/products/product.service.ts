/* eslint-disable */
import { Injectable } from "@nestjs/common";
import * as puppeteer from "puppeteer";

@Injectable()
export class ProductService {
  async findAll(query: any): Promise<any[]> {
    const { nutrition, nova } = query;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://br.openfoodfacts.org/");

    const products = await page.evaluate(
      (nutrition, nova) => {
        const productList = [];
        const productElements = document.querySelectorAll(".search_results li");

        productElements.forEach(productElement => {
          const productLink = productElement.querySelector(".list_product_a").getAttribute("href");
          const idMatch = productLink.match(/\/produto\/([^\/]+)\//);
          if (!idMatch) return; // Verifica se houve correspondência na expressão regular
          const id = idMatch[1];

          const product = {
            id: id,
            name: productElement.querySelector(".list_product_name").textContent.trim(),
            nutrition: {
              score: productElement.querySelector('.list_product_icons[title^="Nutri-Score"]').getAttribute("title").split(" ")[1],
              title: productElement.querySelector('.list_product_icons[title^="Nutri-Score"]').getAttribute("title").split(" - ")[1],
            },
            nova: {
              score: parseInt(productElement.querySelector('.list_product_icons[title^="NOVA"]').getAttribute("title").split(" ")[1]),
              title: productElement.querySelector('.list_product_icons[title^="NOVA"]').getAttribute("title").split(" - ")[1],
            },
          };

          if (nutrition && nutrition.toUpperCase() !== product.nutrition.score) return;
          if (nova && parseInt(nova) !== product.nova.score) return;

          productList.push(product);
        });

        return productList;
      },
      nutrition,
      nova,
    );

    await browser.close();
    return products;
  }

  async findOne(id: string): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://br.openfoodfacts.org/produto/${id}`);

    const productDetails = await page.evaluate(() => {
      const getTextContent = selector => {
        const element = document.querySelector(selector);
        return element ? element.textContent.trim() : false;
      };

      const mapEvaluationToValue = evaluationText => {
        const lowerCaseText = evaluationText.toLowerCase();
        if (lowerCaseText.includes("moderada")) {
          return "moderate";
        } else if (lowerCaseText.includes("elevada")) {
          return "high";
        } else if (lowerCaseText.includes("baixa")) {
          return "low";
        } else {
          return ""; // Valor padrão caso não corresponda a nenhum dos critérios acima
        }
      };

      // Verificação para o campo/dado hasPalmOil, o campo possui 3 informações diferentes
      const hasPalmOilElement1 = document.querySelector("#panel_ingredients_analysis_en-may-contain-palm-oil .panel_title");
      const hasPalmOilElement2 = document.querySelector("#panel_ingredients_analysis_en-palm-oil-content-unknown .panel_title");
      const hasPalmOilElement3 = document.querySelector("#panel_ingredients_analysis_en-palm-oil-free .panel_title");

      let hasPalmOil = "";

      if (hasPalmOilElement1) {
        hasPalmOil = hasPalmOilElement1.textContent.trim();
      } else if (hasPalmOilElement2) {
        hasPalmOil = hasPalmOilElement2.textContent.trim();
      } else if (hasPalmOilElement3) {
        hasPalmOil = hasPalmOilElement3.textContent.trim();
      }

      const product = {
        title: document.querySelector(".title-1") ? document.querySelector(".title-1").textContent.trim() : "",
        quantity: document.querySelector("#field_quantity_value") ? document.querySelector("#field_quantity_value").textContent.trim() : "",
        ingredients: {
          hasPalmOil: hasPalmOil,
          isVegan: getTextContent("#panel_ingredients_analysis_en-vegan .evaluation_good_title") === "Vegano",
          isVegetarian: getTextContent("#panel_ingredients_analysis_en-vegetarian .evaluation_good_title") === "Vegetariano",
          list: [document.querySelector(".panel_text") ? document.querySelector(".panel_text").textContent.trim() : ""],
        },
        nutrition: {
          score: document.querySelector(".grade_d_title") ? document.querySelector(".grade_d_title").textContent.trim().slice(-1) : "",
          values: [],
          servingSize: document.querySelector("#panel_serving_size_content .panel_text")
            ? document.querySelector("#panel_serving_size_content .panel_text").textContent.trim().replace("Tamanho da porção:", "").trim()
            : "",
          data: {},
        },
        nova: {
          score: document.querySelector(".grade_e_title") ? parseInt(document.querySelector(".grade_e_title").textContent.trim().slice(-1)) : "",
          title: document.querySelector(".grade_e span") ? document.querySelector(".grade_e span").textContent.trim() : "",
        },
      };

      const fatElement = document.querySelector("#panel_nutrient_level_fat .evaluation__title");
      if (fatElement) {
        const fatEvaluationText = fatElement.textContent.trim();
        product.nutrition.values.push([mapEvaluationToValue(fatEvaluationText), fatEvaluationText]);
      }

      const saturatedFatElement = document.querySelector("#panel_nutrient_level_saturated-fat .evaluation__title");
      if (saturatedFatElement) {
        const saturatedFatEvaluationText = saturatedFatElement.textContent.trim();
        product.nutrition.values.push([mapEvaluationToValue(saturatedFatEvaluationText), saturatedFatEvaluationText]);
      }

      const sugarsElement = document.querySelector("#panel_nutrient_level_sugars .evaluation__title");
      if (sugarsElement) {
        const sugarsEvaluationText = sugarsElement.textContent.trim();
        product.nutrition.values.push([mapEvaluationToValue(sugarsEvaluationText), sugarsEvaluationText]);
      }

      const rows = document.querySelectorAll("#panel_nutrition_facts_table_content tbody tr");
      rows.forEach((row, index) => {
        if (index < 8) {
          const cells = row.querySelectorAll("td");
          const nutrient = cells[0].querySelector("span").textContent.trim();
          let per100g = "";
          let perServing = "";

          if (cells.length > 1) {
            per100g = cells[1].querySelector("span") ? cells[1].querySelector("span").textContent.trim() : "";
          }

          if (cells.length > 2) {
            perServing = cells[2].querySelector("span") ? cells[2].querySelector("span").textContent.trim() : "";
          }

          product.nutrition.data[nutrient] = {
            per100g,
            perServing,
          };
        }
      });

      return product;
    });

    await browser.close();
    return productDetails;
  }
}
