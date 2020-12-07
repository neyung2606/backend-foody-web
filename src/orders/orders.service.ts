import { Injectable } from '@nestjs/common';
import { OrdersRespository } from './orders.respository';
import { Orders } from './orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { ProductOrder } from './interfaces/productOrder.interface';
import { Product } from 'src/products/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRespository)
    private orderRespository: OrdersRespository,
  ) {}

  async getOrder(): Promise<Orders[]> {
    return this.orderRespository.find({ relations: ['user'] });
  }

  async createOrder(
    createOrderDto: CreateOrderDto
  ): Promise<Orders> {
    const {
      name,
      address,
      phone,
      totalMoney,
      productOrder,
      id_user,
    } = await createOrderDto;
    try {

      const order = new Orders();
      order.name_receive = name;
      order.address_receive = address;
      order.phone_receive = phone;
      order.totalMoney = totalMoney;
      order.user = await User.findOne({ where: { id: id_user } });
      order.orderDetail = await this.getProduct(productOrder);
      order.create_at = new Date();
      order.save();
  
      return order;
    } catch {
      console.log('loi')
    }
  }

  async getProduct(order_product: any[]): Promise<ProductOrder[]> {
    return Promise.all(order_product.map(async item => {
        const product: Product = await Product.findOne({
          where: { id: item.id_product },
        });
        return {
          quantity: item.quantity,
          product: product,
        };
      
    })).catch(error => { throw error});
  }
}
