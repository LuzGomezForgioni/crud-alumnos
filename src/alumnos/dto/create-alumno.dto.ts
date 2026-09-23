import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateAlumnoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @Length(7, 8)
  dni: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsNumber()
  @IsNotEmpty()
  cursoId: number;
}