import 
{
     Injectable,
     HttpException,
     HttpStatus,
     NotFoundException, 
} from '@nestjs/common';
import {ProductRespository} from './product.respository';
import {Product} from './product.entity';
import {CreateProductDto } from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {ObjectID} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
constructor(
    @InjectRepository(ProductRespository)
    private userRepository: ProductRespository,
  ) {}

  async getProducts() : Promise<Product[]>
  {
      return this.userRepository.find();
  }
 
  async getProductByID(id: ObjectID ) : Promise<Product>{
      const product = this.userRepository.findOne(id);
      
      if (!product) {
          throw new NotFoundException (`Product with ${id} not found`);
      }
    
      return product;
  }

  async createProduct(product: CreateProductDto): Promise<Product>
  {
    return this.userRepository.createProduct(product);
  }
  
  async updateProduct(id:ObjectID, product: UpdateProductDto): Promise<Product>{
    const found = this.getProductByID(id);
    if (!found) {
        throw new NotFoundException (`Product with ${id} not found. You can't update`);
    }
    this.userRepository.update(id,product);
    return this.getProductByID(id);
  }

  async deleteProduct(id:ObjectID): Promise<void>{
    const result = await this.userRepository.delete(id);
    if(result.affected===0){
        throw new NotFoundException(`Product with "${id}" not found`);
    } 
  }



}
