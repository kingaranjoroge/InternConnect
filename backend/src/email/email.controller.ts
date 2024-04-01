// email.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('send-email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() emailData: { from: string; to: string; subject: string; text: string; }) {
    return await this.emailService.sendEmail(emailData.from, emailData.to, emailData.subject, emailData.text);
  }
}