import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    image: string;

    @Column()
    price: string;

    @Column()
    categoryID: string;

    @Column()
    warranty: String;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column()
    tag: string;

    @Column()
    createby: string;

    @Column()
    createdate: number;

    @Column()
    updateby: string;

    @Column()
    updatedate: number;

    @Column()
    status: string;

    @Column()
    postID: string;

}