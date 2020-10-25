import { IsNotEmpty,MinLength,MaxLength, IsEmail } from 'class-validator'

export class UpdateUserDto {
   
    name: string;

    @MinLength(6)
    @MaxLength(30)
    username: string;

    @MinLength(8)
    password: string;

    @IsEmail()
    email: String;

    @IsNotEmpty()
    dayOfBirth: number;


    address: string;

    @IsNotEmpty()
    @IsNotEmpty()
    phone: string;

    role: string;
}