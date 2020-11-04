import { Role } from "../roles/role.entity";
import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm";
import { IsEmail } from "class-validator";
import * as bcrypt from 'bcrypt'

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column({unique:true})
    username: string;

    @Column()
    password: string;

    @Column()
    @IsEmail()
    email: String;

    @Column()
    avatar: string;

    @Column()
    dayOfBirth: Date;

    @Column()
    address: string;

    @Column()
    phone: string;

    roleId: number;

    @BeforeInsert()
    @BeforeUpdate()
    hashPwd() {
        this.password = bcrypt.hashSync(this.password, 10)
    }

    @ManyToOne(() => Role)
    role: Role;
}