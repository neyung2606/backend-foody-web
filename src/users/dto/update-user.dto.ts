import { IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    avatar: string;

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

    @IsNotEmpty()
    role: string;
}