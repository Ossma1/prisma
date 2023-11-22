import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';
import { Etudiant, Prisma } from '@prisma/client';

@Controller('etudiants')
export class EtudiantsController {
  constructor(private readonly etudiantsService: EtudiantsService) {}

  @Post()
  async createEtudiant(
    @Body() createEtudiantData: Prisma.EtudiantCreateInput,
  ): Promise<Etudiant> {
    return this.etudiantsService.createEtudiant(createEtudiantData);
  }

  @Get()
  async findAllEtudiants(): Promise<Etudiant[]> {
    return this.etudiantsService.findAllEtudiants();
  }

  @Get(':id')
  async findEtudiantById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Etudiant | null> {
    return this.etudiantsService.findEtudiantById(id);
  }

  @Put(':id')
  async updateEtudiant(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEtudiantData: Prisma.EtudiantUpdateInput,
  ): Promise<Etudiant> {
    return this.etudiantsService.updateEtudiant(id, updateEtudiantData);
  }

  @Delete(':id')
  async removeEtudiant(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Etudiant> {
    return this.etudiantsService.removeEtudiant(id);
  }
}
