import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EnseignantsService } from './enseignants.service';
import { Enseignant, Prisma } from '@prisma/client';

@Controller('enseignants')
export class EnseignantsController {
  constructor(private enseignantsService: EnseignantsService) {}

  @Post()
  async createEnseignant(
    @Body() createEnseignantDto: Prisma.EnseignantCreateInput,
  ): Promise<Enseignant> {
    return this.enseignantsService.createEnseignant(createEnseignantDto);
  }

  @Get()
  async findAllEnseignants(): Promise<Enseignant[]> {
    return this.enseignantsService.findAllEnseignants();
  }

  @Get(':id')
  async findEnseignantById(
    @Param('id') id: number,
  ): Promise<Enseignant | null> {
    return this.enseignantsService.findEnseignantById(id);
  }

  @Put(':id')
  async updateEnseignant(
    @Param('id') id: number,
    @Body() updateEnseignantDto: Prisma.EnseignantUpdateInput,
  ): Promise<Enseignant> {
    return this.enseignantsService.updateEnseignant(id, updateEnseignantDto);
  }

  @Delete(':id')
  async removeEnseignant(@Param('id') id: number): Promise<Enseignant> {
    return this.enseignantsService.removeEnseignant(id);
  }
}
