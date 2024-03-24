import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Attachment } from 'src/schemas/Attachment.schema';
import { Model } from 'mongoose';

@Injectable()
export class AttachmentsService {

  constructor(@InjectModel(Attachment.name) private attachmentModel: Model<Attachment>) { }

  create(createAttachmentDto: CreateAttachmentDto) {
    const newAttachment = new this.attachmentModel(createAttachmentDto);
    return newAttachment.save();
  }

  findAll() {
    return this.attachmentModel.find();
  }

  findOne(id: string) {
    return this.attachmentModel.findById(id);
  }

  update(id: string, updateAttachmentDto: UpdateAttachmentDto) {
    return this.attachmentModel.findByIdAndUpdate(id, updateAttachmentDto, { new: true });
  }

  remove(id: string) {
    return this.attachmentModel.findByIdAndDelete(id);
  }
}
