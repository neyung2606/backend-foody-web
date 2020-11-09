import { Repository, EntityRepository, ObjectID } from "typeorm";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";

@EntityRepository(Product)
export class ProductRespository extends Repository<Product> {
    async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
        const { name, image , price, warranty, description, quantity, tag, createby,createdate, updateby,updatedate,status } = CreateProductDto;

        const product = new Product();
        product.name = name;
        product.image = "";
        product.price = price;
        product.warranty = warranty;
        product.description = description;
        product.quantity = quantity;
        product.tag = tag;
        product.createby =createby;
        product.createdate = createdate;
        product.updateby =updateby;
        product.updatedate =updatedate;
        product.status= status;
        await product.save();

        return product;
    }
}