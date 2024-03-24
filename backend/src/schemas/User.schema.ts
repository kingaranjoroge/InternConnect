import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: false
  })
  username?: string;

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
    required: true
  })
  password: string;

  @Prop({
    required: true
  })
  role: string;

  @Prop({
    required: false
  })
  university?: string;

  @Prop({
    required: false
  })
  course?: string;

  @Prop({
    required: false
  })
  regNumber?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);