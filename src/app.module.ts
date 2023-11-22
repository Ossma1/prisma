import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnseignantsModule } from './enseignants/enseignants.module';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EnseignantsModule, EtudiantsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
