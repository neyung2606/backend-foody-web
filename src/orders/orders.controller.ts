import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Auth } from 'src/auth/auth.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { Orders } from './orders.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(readonly ordersService: OrdersService) {}

  @Get()
  @Auth('')
  getAllOrder(): Promise<Orders[]> {
    return this.ordersService.getOrder();
  }

  @Post('/create')
  @Auth('')
  createOrder(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<Orders> {
    return this.ordersService.createOrder(createOrderDto);
  }

  // @Put('/:id')
  // updateOrder

  @Delete('/:id')
  @Auth('')
  deleteOrder(@Param('id') id: number): Promise<void> {
    return this.ordersService.deleteOrder(id);
  }
}
