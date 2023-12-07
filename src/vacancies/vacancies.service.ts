import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IVacancy } from './entities/vacancy.entity';
import { OrganisationsService } from 'src/organisations/organisations.service';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class VacanciesService {
  constructor(
    @InjectModel('Vacancy') private readonly vacancyModel: Model<IVacancy>,
    private readonly organisationService: OrganisationsService,
    private readonly employeeService: EmployeesService,
  ) {}

  async create(createVacancyDto: CreateVacancyDto): Promise<any> {
    let vacancy: any = {};
    try {
      if (!createVacancyDto.orgId) {
        throw new BadRequestException('Organisation id is required');
      }
      if (!createVacancyDto.createdBy) {
        throw new BadRequestException('Employee/Creator id is required');
      }
      const organisation = await this.organisationService.getOne(
        createVacancyDto.orgId,
      );
      const employee = await this.employeeService.getOne(
        createVacancyDto.createdBy,
      );
      if (!organisation) {
        throw new BadRequestException("Organisation doesn't exist for this id");
      }
      if (!employee) {
        throw new BadRequestException("Employee doesn't exist for this id");
      }
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
    vacancy = await this.vacancyModel.create(createVacancyDto);
    return vacancy;
  }

  findAll() {
    return `This action returns all vacancies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacancy`;
  }

  update(id: number, updateVacancyDto: UpdateVacancyDto) {
    return `This action updates a #${id} vacancy`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacancy`;
  }
}
