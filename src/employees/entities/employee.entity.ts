import { Schema, SchemaTypes } from 'mongoose';

export const EmployeeSchema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    active: { type: Boolean, required: true, default: true },
    empCode: { type: String, required: true },
    username: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    aadhaar: { type: String, required: true },
    pan: { type: String, required: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    organisationName: { type: String, required: true },
    orgId: { type: SchemaTypes.ObjectId, ref: 'Organisation', required: true },
  },
  { timestamps: true },
);

export interface IEmployee {
  name: string;
  avatar: string;
  empCode: string;
  username: string;
  active: boolean;
  contact: string;
  email: string;
  password: string;
  aadhaar: string;
  pan: string;
  department: string;
  role: string;
  organisationName: string;
  orgId: string;
}
