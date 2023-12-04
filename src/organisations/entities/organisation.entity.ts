import { Schema } from 'mongoose';

export const OrganisationSchema = new Schema(
  {
    name: {
      type: String,
      requird: true,
    },
    jobPositions: {
      type: Array,
      default: ['fresher', 'associate', 'senior', 'executive', 'advisory'],
      required: true,
    },
    jobTypes: {
      type: Array,
      default: [
        'freelance',
        'full-time',
        'part-time',
        'contractual',
        'internship',
        'seasonal',
      ],
      required: true,
    },
    jobDepartments: {
      type: Array,
      default: ['sales', 'marketing', 'desgin', 'engineering'],
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    tan: {
      type: String,
    },
    gst: {
      type: String,
      required: true,
    },
    description: {
      string: String,
    },
  },
  { timestamps: true },
);

export interface IOrganisation {
  name: string;
  pan: string;
  tan: string;
  gst: string;
}
