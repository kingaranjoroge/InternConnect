import { Module } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import { AttachmentsController } from './attachments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attachment, AttachmentSchema } from '../schemas/Attachment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Attachment.name,
        schema: AttachmentSchema,
      },
    ])
  ],
  controllers: [AttachmentsController],
  providers: [AttachmentsService],
})
export class AttachmentsModule {}
