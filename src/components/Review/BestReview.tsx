import { Review } from '../../types/ProgramDetailType';
import { EmptyStar, Star } from '../../assets/svg';
import { formatDate } from '../../utils/formatDate';

interface BEST_REVIEW {
  bestReview: Review[];
  programTitle: string;
}

export default function BestReview({ bestReview, programTitle }: BEST_REVIEW) {
  const maxStars: number = 5;

  return (
    <section className="bg-Neutral-grayscale-90 py-10">
      <div className="px-5 font-pretendard mx-auto lg:w-[1074px]">
        <h1 className="text-Neutral-grayscale-0 text-2xl font-bold mb-10 text-center">
          렛츠커리어로 커리어를
          <br /> 쌓은 선배들의 후기
        </h1>
        <article className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5 w-[350px] mx-auto lg:w-[1074px]">
          {bestReview.map((bestreview, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md px-5 py-3 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-Neutral-grayscale-30">
                    {bestreview.userName}
                  </p>
                  <p className="text-xs font-medium text-Neutral-grayscale-40">
                    {formatDate(bestreview.date)}
                  </p>
                  <p className="text-xs font-medium text-Neutral-grayscale-40">{programTitle}</p>
                </div>

                <div className="flex items-center gap-[4px]">
                  {[...Array(bestreview.grade)].map((_, index) => (
                    <Star key={`star-${index}`} className="w-[22px] h-[22px] mb-[16px]" />
                  ))}
                  {[...Array(maxStars - bestreview.grade)].map((_, index) => (
                    <EmptyStar
                      key={`empty-star-${index}`}
                      className="w-[22px] h-[22px] mb-[16px]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs font-normal text-Neutral-grayscale-30 flex-grow">
                {bestreview.content}
              </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
