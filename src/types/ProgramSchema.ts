import { z } from 'zod';
import { RecruitState } from '../components/Filters/RecruitTags';

const ProgramSchema = z.object({
  programId: z.number(),
  title: z.string(),
  intro: z.string(),
  deadline: z.number(),
  programStartDate: z.string(),
  programEndDate: z.string(),
  thumbnail: z.string(),
  recruitStatus: z.nativeEnum(RecruitState),
  tag: z.string(),
  dtype: z.string(),
});

export { ProgramSchema };