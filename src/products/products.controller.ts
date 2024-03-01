/* eslint-disable */
import { Controller, Get, HttpCode, HttpException, HttpStatus, Param, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { InvalidProductIdException } from "./invalid-product-id.exception";
import { Product } from "./product.interfaces";
import { ProductService } from "./product.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiQuery({ name: "nutrition", required: false })
  @ApiQuery({ name: "nova", required: false })
  async findAll(@Query() query: any): Promise<Product[]> {
    return this.productService.findAll(query);
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async findOne(@Param("id") id: string) {
    try {
      return await this.productService.findOne(id);
    } catch (error) {
      if (error instanceof InvalidProductIdException) {
        throw new HttpException("Invalid product ID", HttpStatus.BAD_REQUEST);
      }
      throw new HttpException("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
