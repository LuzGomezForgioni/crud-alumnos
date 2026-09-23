import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Curso } from '../../cursos/entities/curso.entity';

@Entity('alumnos')
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dni: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column({ type: 'date', nullable: true })
  fechaNacimiento: Date;

  @ManyToOne(() => Curso, (curso) => curso.alumnos)
  curso: Curso;
}
