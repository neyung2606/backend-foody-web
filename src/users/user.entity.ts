import { Column, Entity, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string

    @Column({unique:true})
    username: string;

    @Column()
    password: string;

    @Column() 
    email: String;

    @Column()
    avatar: string;

    @Column()
    dayOfBirth: number;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    role: string;
}