import { Curriculum } from '../../types/ProgramDetailType';

interface Props {
  curriculum: Curriculum;
}

export default function TabCurriculum({ curriculum }: Props) {
  const transNumber = (number: string) => {
    const toNum: number = parseInt(number);

    if (toNum < 10) {
      return `0${toNum.toString()}`;
    } else {
      return number;
    }
  };

  return (
    <article className="bg-Neutral-grayscale-100 w-[350px] lg:w-[1120px] mx-auto rounded-2xl mb-3 p-5 border-[1px] border-Black_Opacity-12 font-pretendard lg:flex">
      <div className="flex items-center mb-2 lg:w-[350px] lg:my-auto">
        <span className="text-Primary-100 text-[26px] font-semibold mr-3 lg:ml-3">
          {transNumber(curriculum.order)}
        </span>
        <h3 className="font-semibold text-lg text-Neutral-grayscale-30 lg:my-auto lg:ml-3">
          {curriculum.title}
        </h3>
      </div>

      <p className="text-base font-medium text-Neutral-grayscale-35 lg:my-auto">
        {curriculum.content}
      </p>
    </article>
  );
}
