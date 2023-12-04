import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationsModule } from './organisations/organisations.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [OrganisationsModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
