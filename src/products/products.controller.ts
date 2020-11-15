import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
import {ProductsService} from './products.service';
import {Product} from './product.entity';
import {CreateProductDto } from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {ObjectID} from 'typeorm';
import { Auth } from 'src/auth/auth.decorator';
//import {AuthService} from '../auth/auth.service';


@Controller()
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Get("products")
    getProduct(): Promise<Product[]>
    {
        return this.productService.getProducts();
    }

    @Get('products/:id')
    getProductbyId(@Param('id') id:ObjectID): Promise<Product>{
        return this.productService.getProductByID(id);
    }

    @Post('products/create')
    @Auth('PRODUCT_CREATE')
    @UsePipes(ValidationPipe)
    createProducts(@Body() CreateProductDto: CreateProductDto){
        return this.productService.createProduct(CreateProductDto);
    }

    @Patch('products/:id')
    @Auth('PRODUCT_UPDATE')
    updateProduct(
        @Param('id') id: ObjectID,
        @Body() product: UpdateProductDto
    ): Promise<Product>{
        return this.productService.updateProduct(id,product);
    }

    @Delete('products/:id')
    @Auth('PRODUCT_DELETE')
    deleteProduct(@Param('id') id: ObjectID): Promise<void>{
        return this.productService.deleteProduct(id);
    }
}
    
    
