import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Organization {
  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: true
  })
  location: string;

  @Prop({
    required: true,
    unique: true
  })
  email: string;

  @Prop({
    required: true,
    unique: true
  })
  phone: string;

  @Prop({
    required: true,
  })
  role: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);