import { from } from "rxjs";
import { Repository, EntityRepository } from "typeorm";
import {Orders} from "./orders.entity";
import {CreateOrderDto} from "./dto/create-order.dto";
import {Product} from "src/products/product.entity";
import {User} from "src/users/user.entity";

@EntityRepository(Orders)
export class OrdersRespository extends Repository<Orders>{
    async createOrder(CreateOrderDto : CreateOrderDto) : Promise<Orders>{
        const {totalMoney, payment,orderStatus, user, product} = CreateOrderDto;
        const userid : User = await User.findOne()
        const productid : Product[] = await Product.find();

        const orders = new Orders();
        orders.totalMoney = totalMoney;
        orders.payment = payment;
        orders.orderStatus =orderStatus;
        orders.user = userid;
        orders.product = productid;
        await orders.save();

        return orders;
    }
}
