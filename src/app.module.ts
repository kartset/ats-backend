import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationsModule } from './organisations/organisations.module';
import { EmployeesModule } from './employees/employees.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [OrganisationsModule, EmployeesModule, VacanciesModule, CandidatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
