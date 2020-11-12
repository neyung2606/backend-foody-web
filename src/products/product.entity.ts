import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';
import { productCategories } from '../products-categories/products-categories.entity'
@Entity('products')
export class Product extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    name: string

    @Column()
    image: string;

    @Column()
    price: number;

    @ApiProperty({ writeOnly: true, example: [1, 4] })
    @IsOptional()
    @IsNumber({}, { each: true })
    categoryID: Array<number>;

    @Column()
    description: string;

    @Column()
    quantity: number;

    postID: string;

    //relation 
  //  @ApiProperty()
  //  @ManyToMany(
   //    () => productCategories,
  //    productscategory => productscategory.product ,
  //  )
    @JoinTable
    (
        {
            name: 'categories_products',
            joinColumn: 
            {
                name: 'productID',
                referencedColumnName: "id",
            },
            inverseJoinColumn:
            {
                name: 'categoryID',
                referencedColumnName: "id"
            },
        },
    )
    @ManyToMany(() => productCategories)
     productscategory: productCategories;

}