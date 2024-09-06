import { Curriculum } from '../../types/ProgramDetailType';

interface Props {
  curriculum: Curriculum;
}

export default function TabCurriculum({ curriculum }: Props) {
  return (
    <article className="bg-Neutral-grayscale-100 w-[350px] mx-auto rounded-2xl mb-3 p-5 border-[1px] border-Black_Opacity-12 font-pretendard">
      <div className="flex items-center mb-2">
        <span className="text-Primary-100 text-[26px] font-semibold mr-1">{curriculum.order}</span>
        <h3 className="font-semibold text-lg text-Neutral-grayscale-30">{curriculum.title}</h3>
      </div>

      <p className="text-base font-medium text-Neutral-grayscale-35">{curriculum.content}</p>
    </article>
  );
}
