import { Controller, Post, Body } from '@nestjs/common';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  createApplication(@Body() application: any) {
    console.log(application);  // Log the received application data to the console
    this.applicationsService.createApplication(application);
    return application;
  }
}