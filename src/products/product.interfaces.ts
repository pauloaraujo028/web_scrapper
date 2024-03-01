/* eslint-disable */
export interface Product {
  id: string;
  title: string;
  quantity: string;
  ingredients: IngredientsInfo;
  nutrition: NutritionInfo;
  nova: NovaInfo;
}

export interface IngredientsInfo {
  hasPalmOil: boolean | "unknown";
  isVegan: boolean;
  isVegetarian: boolean;
  list: string[];
}

export interface NutritionInfo {
  score: string;
  servingSize: string;
  values: [string, string][];
  data: { [key: string]: { per100g: string; perServing: string } };
}

export interface NovaInfo {
  score: number;
  title: string;
}
