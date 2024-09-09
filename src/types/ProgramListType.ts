import { RecruitState } from '../components/Filters/RecruitTags';

export interface Program {
  programId: number;
  title: string;
  intro: string;
  deadline: number;
  programStartDate: string;
  programEndDate: string;
  thumbnail: string;
  recruitStatus: RecruitState;
  tag: string;
  dtype: string;
}
