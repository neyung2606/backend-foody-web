import { 
    Injectable,
    HttpException,
    HttpStatus,
    NotFoundException
} from '@nestjs/common';
import { from } from 'rxjs';
import {OrdersRespository} from './orders.respository';
import {Orders} from './orders.entity';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
constructor(
    @InjectRepository(OrdersRespository)
   private orderRespository : OrdersRespository,
){}

}
