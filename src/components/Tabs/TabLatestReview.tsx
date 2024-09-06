import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from '../../types/ProgramDetailType';
import { Star } from '../../assets/svg';

interface Props {
  reviews: Review[];
}

export default function TabLatestReview({ reviews }: Props) {
  const { programId } = useParams<{ programId: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(window.innerWidth >= 768);
  const [touchStartX, setTouchStartX] = useState(0); // 터치 시작 위치
  const [touchEndX, setTouchEndX] = useState(0); // 터치 종료 위치

  // 화면 너비 변화 감지
  useEffect(() => {
    const handleResize = () => {
      setShowButtons(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 이전 슬라이드로 이동
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // 다음 슬라이드로 이동
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // 터치 시작 시 위치 저장
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  // 터치 이동 시 위치 저장
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  // 터치 종료 시 슬라이드 이동 결정
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNextClick(); // 오른쪽으로 스와이프
    }

    if (touchStartX - touchEndX < -50) {
      handlePrevClick(); // 왼쪽으로 스와이프
    }

    // 터치 종료 후 초기화
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      className="relative w-full mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 리뷰 항목들 */}
      <div className="overflow-hidden w-[290px] mx-auto">
        <p className="font-pretendard text-center font-bold text-2xl mt-2 mb-[72px]">
          실제 수강생들의 솔직한 후기
        </p>

        <div className="flex justify-end">
          <a
            href={`/program/${programId}/review`}
            className="font-pretendard text-base text-Neutral-grayscale-30"
          >
            더보기
          </a>
        </div>

        <div
          className="flex transition-transform duration-500 mt-2 border-[1px] border-Black_Opacity-12"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 font-pretendard">
              <div className="bg-white rounded-lg p-6">
                {/* 별점 */}
                <div className="flex mb-4">
                  {Array.from({ length: review.grade }, (_, i) => (
                    <Star key={i} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]" />
                  ))}
                </div>
                {/* 프로그램 이름 */}
                <p className="text-sm font-semibold mb-1">이력서&자기소개서 완성 1기</p>
                {/* 작성 시간 */}
                <p className="text-xs text-gray-500 mb-2">{review.createAt.toLocaleDateString()}</p>
                {/* 사용자 이름 */}
                <p className="text-xs text-gray-500 mb-2">{review.userName}</p>
                {/* 리뷰 내용 */}
                <p className="text-sm text-gray-600">{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이전/다음 버튼 - 화면 너비가 768px 이상일 때만 표시 */}
      {showButtons && (
        <>
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
}
