import SvgStar from '../../assets/svg/Star';
import SvgEmptyStar from '../../assets/svg/EmptyStar';

interface Props {
  gradeAverage: number;
  gradeCount: number;
}

export default function GradeAverage({ gradeAverage, gradeCount }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 lg:w-auto mt-4">
      <p className="text-Neutral-grayscale-0 text-3xl font-medium">
        {gradeAverage}
        <span className="text-xl">점</span>
      </p>
      <div className="flex items-center justify-center space-x-2 text-2xl font-bold mt-3">
        <span className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              i < Math.floor(gradeAverage) ? (
                <SvgStar key={i} width={24} height={24} className="mr-2" />
              ) : (
                <SvgEmptyStar key={i} width={24} height={24} />
              ),
            )}
        </span>
      </div>
      <p className="text-base font-medium text-Neutral-grayscale-0 mt-3">총 {gradeCount}건</p>
    </div>
  );
}
