import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import mongoose from 'mongoose';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Organization not found', 404)
    const findOrganization = await this.organizationsService.findOne(id);
    if (!findOrganization) throw new HttpException('Organization not found', 404)
    return findOrganization;
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedOrganization = await this.organizationsService.update(id, updateOrganizationDto);
    if (!updatedOrganization) throw new HttpException('Organization not found', 404);
    return updatedOrganization;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedOrganization = await this.organizationsService.remove(id);
    if (!deletedOrganization) throw new HttpException('Organization not found', 404);
    return;
  }
}
