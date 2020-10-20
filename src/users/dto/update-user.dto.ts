import { IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    password: string;

    @IsNotEmpty()
    email: String;

    @IsNotEmpty()
    dayOfBirth: number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    role: string;
}