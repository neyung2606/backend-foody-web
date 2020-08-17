import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    job: string;

    @IsNotEmpty()
    indentifyCard: string;
}