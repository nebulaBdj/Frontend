import React, { Dispatch, SetStateAction } from 'react';

const FILTER_ITEMS = [
  { description: '전체', careerType: 'ALL' },
  { description: '커리어 탐색', careerType: 'CAREER_EXPLORE' },
  { description: '서류 준비', careerType: 'DOCUMENT_PREPARE' },
  { description: '면접 준비', careerType: 'INTERVIEW_PREPARE' },
];

interface CareerFilterProps {
  activeItem: string[];
  setActiveItem: Dispatch<SetStateAction<string[]>>;
}

const CareerFilter: React.FC<CareerFilterProps> = ({ activeItem, setActiveItem }) => {
  const handleClick = (careerType: string) => {
    if (careerType === 'ALL') {
      setActiveItem((prev) => (prev.includes('ALL') ? [] : ['ALL']));
    } else {
      setActiveItem((prev) => {
        if (prev.includes('ALL')) {
          return [careerType];
        }
        return prev.includes(careerType) ? [] : [careerType];
      });
    }
  };

  return (
    <div className="flex items-center px-[20px] justify-center sm:justify-start w-full bg-Neutral-grayscale-95">
      <div className="relative mx-auto w-full lg:w-[1160px] h-[56px] sm:h-[58px] mt-[59px] sm:mt-[69px] inline-flex justify-center">
        <section className="flex w-full h-full">
          {FILTER_ITEMS.map(({ description, careerType }) => (
            <button
              key={careerType}
              className={`w-[88px] h-[56px] sm:w-[120px] sm:h-[58px] px-[10px] py-[16px] items-center ${activeItem.includes(careerType)
                ? 'text-Neutral-grayscale-0 border-b-4 border-Primary-80'
                : 'text-Neutral-grayscale-60'
                }`}
              onClick={() => handleClick(careerType)}
            >
              <div className="flex flex-col items-center whitespace-nowrap leading-none">
                {description && (
                  <span className="text-[16px] sm:text-[18px] font-Pretendard font-semibold">
                    {description}
                  </span>
                )}
              </div>
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CareerFilter;
