import { IsEmail } from 'class-validator';

export class CreateAlumnoDto {
  nombre: string;
  apellido: string;
  dni: string;

  @IsEmail()
  email: string;

  telefono: string;
  fechaNacimiento: Date;
  curso: string;
}