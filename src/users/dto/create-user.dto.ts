import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    dayOfBirth: number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone: string;

}