import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
import {ProductsService} from './products.service';
import {Product} from './product.entity';
import {CreateProductDto } from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {ObjectID} from 'typeorm';
import {AuthService} from '../auth/auth.service';


@Controller()
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Get("products")
    @UseGuards(AuthService)
    getProduct(): Promise<Product[]>
    {
        return this.productService.getProducts();
    }

    @Get('products/:id')
    @UseGuards(AuthService)
    getProductbyId(@Param('id') id:ObjectID): Promise<Product>{
        return this.productService.getProductByID(id);
    }

    @Post('products/create')
    @UseGuards(AuthService)
    @UsePipes(ValidationPipe)
    createProducts(@Body() CreateProductDto: CreateProductDto){
        console.log(CreateProductDto);
        return this.productService.createProduct(CreateProductDto);
    }

    @Patch('products/:id')
    @UseGuards(AuthService)
    updateProduct(
        @Param('id') id: ObjectID,
        @Body() product: UpdateProductDto
    ): Promise<Product>{
        console.log(product)
        return this.productService.updateProduct(id,product);
    }

    @Delete('products/:id')
    @UseGuards(AuthService)
    deleteProduct(@Param('id') id: ObjectID): Promise<void>{
        return this.productService.deleteProduct(id);
    }
}
    
    
