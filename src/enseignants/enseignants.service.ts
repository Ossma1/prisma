import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Enseignant, Prisma } from '@prisma/client';

@Injectable()
export class EnseignantsService {
  constructor(private prisma: PrismaService) {}

  async createEnseignant(
    data: Prisma.EnseignantCreateInput,
  ): Promise<Enseignant> {
    return this.prisma.enseignant.create({ data });
  }

  async findAllEnseignants(): Promise<Enseignant[]> {
    return this.prisma.enseignant.findMany();
  }

  async findEnseignantById(id: number): Promise<Enseignant | null> {
    return this.prisma.enseignant.findUnique({ where: { id } });
  }

  async updateEnseignant(
    id: number,
    data: Prisma.EnseignantUpdateInput,
  ): Promise<Enseignant> {
    return this.prisma.enseignant.update({
      where: { id },
      data,
    });
  }

  async removeEnseignant(id: number): Promise<Enseignant> {
    return this.prisma.enseignant.delete({ where: { id } });
  }
}
