import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsMobilePhone } from 'class-validator'

export class CreateUserDto {
    
    name: string;

    @MinLength(6)
    @MaxLength(30)
    username: string;

    @MinLength(8)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;


    dayOfBirth: number;


    address: string;

    @IsMobilePhone()
    @IsNotEmpty()
    phone: string;

    role: string

}