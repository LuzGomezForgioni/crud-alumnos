import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alumno } from '../../alumnos/entities/alumno.entity';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Alumno, (alumno) => alumno.curso)
  alumnos: Alumno[];
}