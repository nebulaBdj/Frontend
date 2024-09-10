import { Dispatch } from 'react';

const items = [
  { description: '전체', career_type: 'ALL' },
  { description: '커리어 탐색', career_type: 'CAREER_EXPLORE' },
  { description: '서류 준비', career_type: 'DOCUMENT_PREPARE' },
  { description: '면접 준비', career_type: 'INTERVIEW_PREPARE' },
];

interface CareerFilterProps {
  activeItem: string[];
  setActiveItem: Dispatch<React.SetStateAction<string[]>>;
}

const CareerFilter: React.FC<CareerFilterProps> = ({ activeItem, setActiveItem }) => {
  const handleClick = (careerType: string) => {
    if (careerType === 'ALL') {
      const isAllSelected = activeItem.includes('ALL');
      if (isAllSelected) {
        return; // 'ALL'이 이미 선택된 상태라면 아무것도 하지 않음
      }
      setActiveItem(['ALL']); // 'ALL' 클릭 시 activeItem은 'ALL'로만 설정
    } else {
      // 'ALL'이 선택된 상태에서 다른 버튼 클릭 시 'ALL'을 비활성화하고 개별 항목만 활성화
      const isAllSelected = activeItem.includes('all');
      if (isAllSelected) {
        setActiveItem([careerType]); // 'ALL'이 선택된 상태면 'ALL'을 해제하고 개별 필터만 활성화
      } else {
        setActiveItem([careerType]); // 다른 필터 선택 시 선택된 필터만 활성화
      }
    }
  };

  return (
    <div className="flex items-center justify-center sm:justify-start w-full mx-[20px]">
      <div className="relative w-full h-[56px] sm:h-[58px] mt-[59px] sm:mt-[69px] inline-flex justify-center bg-white">
        <section className="flex w-full h-full bg-white">
          {items.map((item) => (
            <button
              key={item.career_type}
              className={` w-[88px] h-[56px] sm:w-[120px] sm:h-[58px] px-[10px] py-[16px] items-center  ${activeItem.includes(item.career_type)
                ? 'text-Neutral-grayscale-0 border-b-4 border-Primary-100' // 활성화된 상태일 때
                : 'text-Neutral-grayscale-60' // 비활성화된 상태일 때
                }`}
              onClick={() => handleClick(item.career_type)}
            >
              <div className="flex flex-col items-center whitespace-nowrap leading-none">
                {item.description && (
                  <span className="text-[16px] sm:text-[18px] font-Pretendard font-semibold">{item.description}</span>
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