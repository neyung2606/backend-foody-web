import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersRespository } from './orders.respository';
import { OrdersService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersRespository])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
