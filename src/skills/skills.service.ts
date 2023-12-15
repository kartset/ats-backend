import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISkill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<ISkill>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<any> {
    let skill: any;
    try {
      if (createSkillDto.skill) {
        const exist = await this.skillModel.findOne({
          skill: createSkillDto.skill,
        });
        if (exist) {
          throw new BadRequestException('Skill ALready Exist');
        } else {
          skill = await this.skillModel.create(createSkillDto);
        }
      } else {
        throw new BadRequestException('Skill String is Empty');
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
    return skill;
  }

  async findAll(skill: string): Promise<any> {
    let skills: any;
    if (skill) {
      skills = (
        await this.skillModel
          .find({ skill: { $regex: skill, $options: 'i' } })
          .sort({ mentions: -1 })
          .lean()
      ).slice(0, 5);
    } else {
      skills = (
        await this.skillModel.find().sort({ mentions: -1 }).lean()
      ).slice(0, 6);
    }

    return skills;
  }

  async findOne(id: number): Promise<any> {
    const skill = await this.skillModel.findById(id).lean();
    return skill;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  async remove(id: number): Promise<any> {
    const skill = await this.skillModel.deleteOne({ _id: id });
    return skill;
  }
}
