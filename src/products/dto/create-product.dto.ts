import { IsNotEmpty } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    warranty: String;

    
    description: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    tag: string;

    @IsNotEmpty()
    createby: string;

    @IsNotEmpty()
    createdate: number;

    @IsNotEmpty()
    updateby: string;

    @IsNotEmpty()
    updatedate: number;

    @IsNotEmpty()
    status: string;

}