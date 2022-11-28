import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  access: {type: String, required: true},
  lastLogin: {type: Date, required: true},
});

export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    access: 'teacher' | 'admin';
    lastLogin: Date;
  }
