import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string

    @Column()
    image: string;

    @Column()
    price: string;

    @ObjectIdColumn()
    categoryID: ObjectID;

    @Column()
    warranty: number;

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

    @ObjectIdColumn()
    postID: ObjectID;

}