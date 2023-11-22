import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Etudiant, Prisma } from '@prisma/client';

@Injectable()
export class EtudiantsService {
  constructor(private prisma: PrismaService) {}

  async createEtudiant(data: Prisma.EtudiantCreateInput): Promise<Etudiant> {
    return this.prisma.etudiant.create({ data });
  }

  async findAllEtudiants(): Promise<Etudiant[]> {
    return this.prisma.etudiant.findMany();
  }

  async findEtudiantById(id: number): Promise<Etudiant | null> {
    return this.prisma.etudiant.findUnique({ where: { id } });
  }

  async updateEtudiant(
    id: number,
    data: Prisma.EtudiantUpdateInput,
  ): Promise<Etudiant> {
    return this.prisma.etudiant.update({
      where: { id },
      data,
    });
  }

  async removeEtudiant(id: number): Promise<Etudiant> {
    return this.prisma.etudiant.delete({ where: { id } });
  }
}
