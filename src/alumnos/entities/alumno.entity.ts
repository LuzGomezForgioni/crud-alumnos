import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alumnos')
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  dni: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column({ type: 'date', nullable: true })
  fechaNacimiento: Date;

  @Column()
  curso: string;
}
