import { IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAttachmentDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    organization: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Please enter a valid email address' })
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    renumeration: number;
}
