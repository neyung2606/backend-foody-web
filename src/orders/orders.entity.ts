
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    JoinTable,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';
import { } from 'class-validator';
import {Product} from '../products/product.entity';
import {User} from '../users/user.entity';

@Entity('orders')
export class Orders extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    totalMoney: number;

    @Column()
    orderStatus: String;

    @Column()
    payment: String;

    userID: number;

    productID: Array<number>;


    //relation
    @ManyToMany(
        () => Product,
        product => product.order,
    )
    product: Product[];

    @ManyToOne (
        () => User,
        user => user.order,
    )
    user : User;
}


