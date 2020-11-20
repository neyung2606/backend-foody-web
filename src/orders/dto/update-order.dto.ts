import {IsNotEmpty} from 'class-validator';

export class UpdateOrderDto {
    @IsNotEmpty()
    totalMoney: number;

    @IsNotEmpty()
    orderStatus: String; 
    
    @IsNotEmpty()
    payment: String;

    user : String;

    product: String;
}