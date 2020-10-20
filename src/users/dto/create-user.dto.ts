import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    email: string;

   
    dayOfBirth: number;

  
    address: string;

   
    phone: string;

}