import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganizationDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Please enter a valid email address' })
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
