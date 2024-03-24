import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Attachment {
    @Prop({
        required: true
    })
    title: string;

    @Prop({
        required: true
    })
    organization: string;

    @Prop({
        required: true
    })
    email: string;

    @Prop({
        required: true
    })
    phone: string;

    @Prop({
        required: true
    })
    location: string;
    
    @Prop({
        required: true
    })
    category: string;

    @Prop({
        required: true
    })
    description: string;   

    @Prop({
        required: false
    })
    renumeration: number;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);