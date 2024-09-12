import { useState } from 'react';
import { Hooking } from '../../../types/ProgramDetailType';

interface Props {
  hookingData: Hooking;
  isMobile: boolean;
}

export default function TabHookingImages({ hookingData, isMobile }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // 터치 시작 시
  const handleTouchStart = (e: React.TouchEvent) => {
    if (hookingData.hookingImageList && hookingData.hookingImageList.length > 1) {
      setTouchStartX(e.targetTouches[0].clientX);
    }
  };

  // 터치 이동 시
  const handleTouchMove = (e: React.TouchEvent) => {
    if (hookingData.hookingImageList && hookingData.hookingImageList.length > 1) {
      setTouchEndX(e.targetTouches[0].clientX);
    }
  };

  // 터치 종료 시 슬라이드 이동 결정
  const handleTouchEnd = () => {
    if (hookingData.hookingImageList && hookingData.hookingImageList.length > 1) {
      if (touchStartX - touchEndX > 50) {
        handleNextClick(); // 오른쪽으로 스와이프
      }

      if (touchStartX - touchEndX < -50) {
        handlePrevClick(); // 왼쪽으로 스와이프
      }

      // 터치 종료 후 초기화
      setTouchStartX(0);
      setTouchEndX(0);
    }
  };

  // 이전 슬라이드로 이동
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hookingData.hookingImageList!.length - 1 : prevIndex - 1,
    );
  };

  // 다음 슬라이드로 이동
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === hookingData.hookingImageList!.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <article className="w-full p-6 mx-auto bg-Neutral-grayscale-100 font-pretendard whitespace-pre-line">
      <div className="my-10 mx-auto text-center">
        {hookingData.preTitle && (
          <p className=" text-Primary-100 text-lg font-medium">{hookingData.preTitle}</p>
        )}
        {hookingData.title && (
          <h2 className="text-Neutral-grayscale-0 text-2xl font-bold mt-2 mb-6">
            {hookingData.title}
          </h2>
        )}
        {hookingData.tagTitle && (
          <div className="text-Primary-90 bg-Primary-20 font-bold pt-[6px] pb-1 px-4 rounded-md inline-block mb-4">
            {hookingData.tagTitle}
          </div>
        )}
        {hookingData.content && (
          <p className="text-gray-700 text-base mb-6 whitespace-pre-line">{hookingData.content}</p>
        )}

        {/* 슬라이드 컨테이너 - hookingImageList가 있을 경우에만 표시 */}
        {hookingData.hookingImageList && hookingData.hookingImageList.length > 0 && (
          <div
            className="overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {hookingData.hookingImageList.map((hookingImage, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center">
                  <img
                    src={isMobile ? hookingImage.imageUrl : hookingImage.pcImageUrl}
                    alt={`${hookingImage.imageUrl}`}
                    className="object-cover rounded-lg mb-2"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
