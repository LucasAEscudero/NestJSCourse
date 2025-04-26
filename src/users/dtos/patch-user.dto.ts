import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export class PatchUserDto extends PartialType(CreateUserDto) {
    // @IsOptional()
    // @IsString()
    // @MinLength(3)
    // @MaxLength(20)
    // firstName?: string;
    // 
    // @IsOptional()        
    // @IsString()
    // @MinLength(3)
    // @MaxLength(20)
    // lastName?: string;
    // 
    // @IsOptional()
    // @IsString()
    // email?: string;
}