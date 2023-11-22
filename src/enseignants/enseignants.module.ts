import { Module } from '@nestjs/common';
import { EnseignantsService } from './enseignants.service';
import { EnseignantsController } from './enseignants.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EnseignantsController],
  providers: [PrismaService, EnseignantsService],
})
export class EnseignantsModule {}
