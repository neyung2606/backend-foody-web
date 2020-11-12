import { Product } from '../products/product.entity';
import { Entity, Column, ManyToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product-categories')
export class productCategories extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: String;

    @Column()
    name: string;

    //relation
    @ManyToMany(() => Product, product => product.productscategory )
    product : Product[]
}