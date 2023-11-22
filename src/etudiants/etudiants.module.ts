import { Module } from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';
import { EtudiantsController } from './etudiants.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EtudiantsController],
  providers: [PrismaService, EtudiantsService],
})
export class EtudiantsModule {}
