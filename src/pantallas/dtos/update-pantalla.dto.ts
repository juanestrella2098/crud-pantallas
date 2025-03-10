/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdatePantallaDto {
    @IsOptional()
    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    marca: string;

    @IsOptional()
    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    modelo: string;

    @IsOptional()
    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    tipo: string;

    @IsOptional()
    @IsNumber({}, { message: 'El tamaño debe ser un número válido' })
    tamanio: number;

    @IsOptional()
    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    alt_image: string;
}