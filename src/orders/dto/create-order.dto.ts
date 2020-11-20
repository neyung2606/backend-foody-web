
import {IsNotEmpty} from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    totalMoney: number;

    @IsNotEmpty()
    orderStatus: String; 
    
    @IsNotEmpty()
    payment: String;

    user : String;

    product: String;
}