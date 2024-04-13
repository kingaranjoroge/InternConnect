import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from 'src/schemas/Organization.shema';
import { Model } from 'mongoose'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class OrganizationsService {

  constructor(@InjectModel(Organization.name) private organizationModel: Model<Organization>) { }

  async create(createOrganizationDto: CreateOrganizationDto) {
    const hashedPassword = await bcrypt.hash(createOrganizationDto.password, 10);
    const newOrganization = new this.organizationModel({ ...createOrganizationDto, password: hashedPassword });
    return newOrganization.save();
  }

  findAll() {
    return this.organizationModel.find();
  }

  findOne(id: string) {
    return this.organizationModel.findById(id);
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationModel.findByIdAndUpdate(id, updateOrganizationDto, { new: true });
  }

  remove(id: string) {
    return this.organizationModel.findByIdAndDelete(id);
  }

  async validateOrg(email: string, password: string): Promise<any> {
    const org = await this.organizationModel.findOne({ email });
    if (org && await bcrypt.compare(password, org.password)) {
      const { password, ...result } = org.toObject();
      return result;
    }
    return null;
  }
}
