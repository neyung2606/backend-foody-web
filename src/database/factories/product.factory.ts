import { define } from 'typeorm-seeding';
import Faker from 'faker';
import {Product} from '../../products/product.entity';
import {productCategories} from '../../products-categories/products-categories.entity';

define(Product, (faker: typeof Faker, context: { productCategory : productCategories }) => {
    const { productCategory } = context;
    const name = faker.food.dish();
    const image = faker.image.food();
    const price = faker.commerce.price();
    const description = faker.food.description();
    const quantity = faker.random.number();
  
  
  
    const product = new Product();
    product.name = name;
    product.image = image;
    product.price = price;
    product.description = description;
    product.quantity = quantity;
    product.productscategory = productCategory;
  
    return product;
  });

