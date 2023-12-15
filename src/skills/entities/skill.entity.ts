import { Schema } from 'mongoose';

export const SkillSchema = new Schema({
  skill: { type: String, required: true },
  mentions: { type: Number, required: true, default: 1 },
  departments: [{ type: String, required: true }],
  type: {
    type: String,
    enum: [
      'transferable',
      'life',
      'digital',
      'personal',
      'social',
      'physical',
      'language',
      'interpersonal',
      'technical',
    ],
    required: true,
  },
});

export interface ISkill {
  skill: string;
  mentions: number;
  departments: string[];
  type: string;
}
