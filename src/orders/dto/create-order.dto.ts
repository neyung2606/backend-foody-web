
import {IsNotEmpty} from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    totalMoney: number;

    @IsNotEmpty()
    orderStatus: string; 
    
    @IsNotEmpty()
    payment: string;

    user : string;

    product: string;
}