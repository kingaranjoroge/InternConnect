import { IsEmail, IsMobilePhone, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    username?: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Please enter a valid email address' })
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsString()
    @IsOptional()
    university?: string;

    @IsString()
    @IsOptional()
    course?: string;

    @IsString()
    @IsOptional()
    regNumber?: string;
}
