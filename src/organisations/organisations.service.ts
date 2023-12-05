import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { IOrganisation } from './entities/organisation.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class OrganisationsService {
  constructor(
    @InjectModel('Organisation')
    private readonly organisationModal: Model<IOrganisation>,
  ) {}

  async create(createOrganisationDto: CreateOrganisationDto): Promise<any> {
    let org: any;

    try {
      if (!createOrganisationDto.name) {
        throw new BadRequestException('Name is required');
      } else {
        org = await this.organisationModal.findOne({
          name: createOrganisationDto.name,
          pan: createOrganisationDto.pan,
          gst: createOrganisationDto.gst,
        });
      }

      if (!org) {
        org = await this.organisationModal.create(createOrganisationDto);
      } else {
        throw new BadRequestException(
          'Organisation with this detail already exist',
        );
      }
      return org;
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
  }

  async getOne(id: string): Promise<any> {
    const org = await this.organisationModal.findOne({ _id: id });
    return org;
  }
}
