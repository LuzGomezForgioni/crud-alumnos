import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno)
    private alumnosRepository: Repository<Alumno>,
  ) {}

  async create(dto: CreateAlumnoDto) {
    const alumnoExistente = await this.alumnosRepository.findOneBy({
      dni: dto.dni,
    });

    if (alumnoExistente) {
      throw new ConflictException('El DNI ya está registrado');
    }

    const alumno = this.alumnosRepository.create(dto);
    return await this.alumnosRepository.save(alumno);
  }

  async findAll(apellido?: string) {
    if (apellido) {
      return await this.alumnosRepository.find({
        where: {
          apellido,
        },
      });
    }

    return await this.alumnosRepository.find();
  }

  async findOne(id: number) {
    const alumno = await this.alumnosRepository.findOneBy({ id });

    if (!alumno) {
      throw new NotFoundException(`Alumno con id ${id} no encontrado`);
    }

    return alumno;
  }

  async update(id: number, dto: UpdateAlumnoDto) {
    await this.findOne(id);

    if (dto.dni) {
      const alumnoExistente = await this.alumnosRepository.findOneBy({
        dni: dto.dni,
      });

      if (alumnoExistente && alumnoExistente.id !== id) {
        throw new ConflictException('El DNI ya está registrado');
      }
    }

    await this.alumnosRepository.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: number) {
    const alumno = await this.findOne(id);

    return await this.alumnosRepository.remove(alumno);
  }
}
