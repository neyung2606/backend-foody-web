import { IsNotEmpty } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    image: string[];

    @IsNotEmpty()
    price: number;


    description: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    category: string;


}