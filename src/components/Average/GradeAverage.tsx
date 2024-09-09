import SvgResultStar from '../../assets/svg/ResultStar';
import SvgResultStarEmpty from '../../assets/svg/ResultStarEmpty';

interface Props {
  gradeAverage: number;
  gradeCount: number;
}

export default function GradeAverage({ gradeAverage, gradeCount }: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-Neutral-grayscale-0 text-3xl lg:text-5xl font-medium">
        {gradeAverage}
        <span className="text-xl">점</span>
      </p>
      <div className="flex items-center justify-center space-x-2 text-2xl font-bold mt-3">
        <span className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              i < Math.floor(gradeAverage) ? (
                <SvgResultStar key={i} className="mr-2 w-[40px] h-[40px] lg:w-[58px] lg:h-[58px]" />
              ) : (
                <SvgResultStarEmpty key={i} className="w-[40px] h-[40px] lg:w-[58px] lg:h-[58px]" />
              ),
            )}
        </span>
      </div>
      <p className="text-base font-medium text-Neutral-grayscale-0 mt-3">총 {gradeCount}건</p>
    </div>
  );
}
