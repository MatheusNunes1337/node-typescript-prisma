import {IsString, Length, IsDecimal, 
    IsNumber, IsOptional, Min, IsNotEmpty,
} from 'class-validator'

export class CreateProductDTO {
    @IsString()
    @Length(3, 45)
    @IsNotEmpty()
    name!: string;

    @IsString()
    @Length(5, 100)
    @IsNotEmpty()
    description!: string;

    @IsDecimal()
    @Min(0)
    price!: number;

    @IsNumber()
    @Min(0)
    stock!: number;

    @IsString()
    @IsOptional()
    coverImage!: string;
}