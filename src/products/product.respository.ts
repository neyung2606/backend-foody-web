import { Repository, EntityRepository, ObjectID } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { productCategories } from "src/products-categories/products-categories.entity";

@EntityRepository(Product)
export class ProductRespository extends Repository<Product> {
    async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
        const { name, image , price, description, quantity, productscategory  } = CreateProductDto;
        const arrcate: productCategories[] = await productCategories.find();

        const product = new Product();
        product.name = name;
        product.image = "";
        product.price = price;
        product.description = description;
        product.quantity = quantity;
        product.productscategory =  await arrcate.find(item => item.name === productscategory)
        await product.save();

        return product;
    }
}