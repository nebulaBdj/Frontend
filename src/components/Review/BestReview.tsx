import { Review } from '../../types/ProgramDetailType';
import { EmptyStar, Star } from '../../assets/svg';

interface BEST_REVIEW {
  bestReview: Review[];
  programTitle: string;
}

export default function BestReview({ bestReview, programTitle }: BEST_REVIEW) {
  const maxStars: number = 5;

  return (
    <section className="bg-Neutral-grayscale-90 py-10 ">
      <div className="mt-20 px-5 font-pretendard max-w-2xl mx-auto">
        <h1 className="text-Neutral-grayscale-0 text-2xl font-bold mb-10 text-center">
          렛츠커리어로 커리어를
          <br /> 쌓은 선배들의 후기
        </h1>
        <article className="space-y-6">
          {bestReview.map((bestreview, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-800">{bestreview.userName}</p>
                  <p className="text-sm font-medium text-gray-500">{programTitle}</p>
                </div>

                <div className="flex items-center gap-[4px]">
                  {/* 별점 개수만큼 Star 렌더링 */}
                  {[...Array(bestreview.grade)].map((_, index) => (
                    <Star
                      key={`star-${index}`}
                      className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px] mb-[16px]"
                    />
                  ))}
                  {/* 빈 별 채우기 */}
                  {[...Array(maxStars - bestreview.grade)].map((_, index) => (
                    <EmptyStar
                      key={`empty-star-${index}`}
                      className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px] mb-[16px]"
                    />
                  ))}
                </div>
              </div>
              <p className="font-normal text-Neutral-grayscale-30">{bestreview.content}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
