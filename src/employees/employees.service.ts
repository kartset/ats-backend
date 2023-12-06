import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { generatePassword } from 'src/utils/helpers';
import { IEmployee } from './entities/employee.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrganisationsService } from 'src/organisations/organisations.service';
@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<IEmployee>,
    private organisationService: OrganisationsService,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto): Promise<any> {
    let user: any = {};
    try {
      if (!createEmployeeDto.orgId) {
        throw new BadRequestException('Ogranisation id is required');
      }
      const organisation = await this.organisationService.getOne(
        createEmployeeDto.orgId,
      );
      if (!organisation) {
        throw new BadRequestException('Invalid Organisation id');
      }
      if (!createEmployeeDto.email) {
        throw new BadRequestException('Email is required');
      }
      user.username = createEmployeeDto.email.split('@')[0];
      user.password = generatePassword();
      user.organisationName = organisation.name;
      user = await this.employeeModel.create({ ...user, ...createEmployeeDto });
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
    return user;
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
