import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationsService {
  createApplication(application: any) {
    console.log(application);  // Log the received application data to the console
    return application;
  }
}