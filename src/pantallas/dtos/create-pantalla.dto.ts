/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePantallaDto {
    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    @IsNotEmpty({ message: 'El valor no puede estar vacio' })
    marca: string;

    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    @IsNotEmpty({ message: 'El valor no puede estar vacio' })
    modelo: string;

    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    @IsNotEmpty({ message: 'El valor no puede estar vacio' })
    tipo: string;

    @IsNumber({}, { message: 'El tamaño debe ser un número válido' })
    @IsNotEmpty()
    tamanio: number;

    @IsString({ message: 'El valor debe de ser una cadena de texto' })
    @IsNotEmpty({ message: 'El valor no puede estar vacio' })
    alt_image: string;
}
