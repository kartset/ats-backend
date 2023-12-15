import { Schema } from 'mongoose';

export const SkillSchema = new Schema({
  skill: { type: String, required: true },
  departments: [{ type: String, required: true }],
});

export interface ISkill {
  skill: string;
  departments: string[];
}
