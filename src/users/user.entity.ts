import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    job: string;

    @Column()
    indentifyCard: string;

    @Column()
    role: string;
}