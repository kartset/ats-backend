import { Schema, SchemaTypes } from 'mongoose';

export const VacancySchema = new Schema({
  title: { type: String, required: true },
  postion: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  remote: { type: Boolean, required: true, default: false },
  department: { type: String, required: true },
  numVacancies: { type: Number, required: true },
  onlyWomenHiring: { type: Boolean, required: true },
  workHours: {
    startTime: { type: Number, required: true },
    startTimeMeridiem: { type: String, required: true },
    endTime: { type: Number, required: true },
    endTimeMeridiem: { type: String, required: true },
  },
  salaryRange: {
    type: { type: String },
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    negotiable: { type: Boolean, required: true, default: true },
  },
  equity: {
    start: { type: Number, required: true },
    end: { type: Number, required: true },
  },
  immediateJoining: { type: Boolean, required: true, default: true },
  skills: [
    {
      id: { type: SchemaTypes.ObjectId, ref: 'Skill' },
      skill: { type: String },
    },
  ],
  textHTML: { type: String },
  questions: [{ text: { type: String } }],
  public: { type: Boolean, required: true, default: false },
  publicLink: { type: String, required: false },
  createdBy: { type: SchemaTypes.ObjectId, ref: 'Employee' },
  orgId: { type: SchemaTypes.ObjectId, ref: 'Organisation' },
});

export interface IVacancy {
  titile: string;
  position: string;
  type: string;
  location: string;
  remote: boolean;
  department: string;
  numVacancies: number;
  onlyWomenHiring: boolean;
  workhours: {
    startTime: number;
    startTimeMeridiem: string;
    endTime: number;
    endTimeMeridiem: string;
  };
  salaryRange: {
    type: string;
    start: number;
    end: number;
    negotiable: boolean;
  };
  equity: { start: number; end: number };
  immediateJoining: boolean;
  skills: [{ skillId: string; skill: string }];
  textHTML: string;
  questions: [{ text: string }];
  public: boolean;
  publicLink: string;
  createdBy: string;
  orgId: string;
}
