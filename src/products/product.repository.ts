import { Repository, EntityRepository, ObjectID } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Categories } from 'src/categories/categories.entity';

@EntityRepository(Product)
export class ProductRespository extends Repository<Product> {
  async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
    const {
      name,
      image,
      price,
      description,
      quantity,
      category,
    } = CreateProductDto;
    const arrcate: Categories[] = await Categories.find();
    const arrAdd = arrcate.filter(item => item.name === category);

    const product = new Product();
    product.name = name;
    product.image = image;
    product.price = price;
    product.description = description;
    product.quantity = quantity;
    product.category = arrAdd;
    await product.save();

    return product;
  }
}
