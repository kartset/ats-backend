import { Controller, Post, Body } from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';

@Controller('organisations')
export class OrganisationsController {
  constructor(private readonly organisationsService: OrganisationsService) {}

  @Post()
  create(@Body() createOrganisationDto: CreateOrganisationDto) {
    return this.organisationsService.create(createOrganisationDto);
  }
}
