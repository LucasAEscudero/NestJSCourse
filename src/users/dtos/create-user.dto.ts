import {IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(20)
    lastName?: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    //@Matches(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/, {
    // message: 'Password must be between 8 and 20 characters long and can only contain letters, numbers, and special characters',
    // })
    password: string;
};