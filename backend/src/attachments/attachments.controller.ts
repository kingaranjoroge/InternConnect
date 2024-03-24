import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import mongoose from 'mongoose';

@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post()
  // @UsePipes(new ValidationPipe())
  create(@Body() createAttachmentDto: CreateAttachmentDto) {
    return this.attachmentsService.create(createAttachmentDto);
  }

  @Get()
  findAll() {
    return this.attachmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Attachment not found', 404)
    const findAttachment = await this.attachmentsService.findOne(id);
    if (!findAttachment) throw new HttpException('Attachment not found', 404)
    return findAttachment;
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateAttachmentDto: UpdateAttachmentDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const updatedAttachment = await this.attachmentsService.update(id, updateAttachmentDto);
    if (!updatedAttachment) throw new HttpException('Attachment not found', 404);
    return updatedAttachment;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);
    const deletedAttachment = await this.attachmentsService.remove(id);
    if (!deletedAttachment) throw new HttpException('Attachment not found', 404);
    return;
  }
}
