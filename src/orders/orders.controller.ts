import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './orders.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(readonly ordersService: OrdersService) {}

  @Get()
  getAllOrder(): Promise<Orders[]> {
    return this.ordersService.getOrder();
  }

  @Post()
  createOrder(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<Orders> {
    return this.ordersService.createOrder(createOrderDto);
  }
}
