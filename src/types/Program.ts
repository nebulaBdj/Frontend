import { RecruitState } from "../components/Filters/RecruitTags";

export interface Program {
  id: number;
  title: string;
  intro: string;
  dday: number;
  program_start_date: string;
  program_finish_date: string;
  imageUrl: string;
  status: RecruitState;
  career_type: string;
  program_type: string;
}