import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ProductRespository } from './product.repository';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRespository)
    private productRepository: ProductRespository,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async getProductByID(id: ObjectID): Promise<Product> {
    const product = this.productRepository.findOne({
      where: {id},
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundException(`Product with ${id} not found`);
    }

    return product;
  }

  async createProduct(product: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(product);
  }

  // async updateProduct(id:ObjectID, product: UpdateProductDto): Promise<Product>{
  //   const found = this.getProductByID(id);
  //   if (!found) {
  //       throw new NotFoundException (`Product with ${id} not found. You can't update`);
  //   }
  //   this.productRepository.update(id,product);
  //   return this.getProductByID(id);
  // }

  async deleteProduct(id: ObjectID): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with "${id}" not found`);
    }
  }
}
