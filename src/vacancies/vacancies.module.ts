import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VacancySchema } from './entities/vacancy.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vacancy', schema: VacancySchema }]),
  ],
  controllers: [VacanciesController],
  providers: [VacanciesService],
})
export class VacanciesModule {}
