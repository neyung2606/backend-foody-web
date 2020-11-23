import {IsNotEmpty} from 'class-validator';

export class UpdateOrderDto {
    @IsNotEmpty()
    totalMoney: number;

    @IsNotEmpty()
    orderStatus: string; 
    
    @IsNotEmpty()
    payment: string;

    user : string;

    product: string;
}