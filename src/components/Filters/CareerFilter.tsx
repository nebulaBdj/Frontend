import { Dispatch } from 'react';

const items = [
  { label: { step: '', description: 'ALL' }, career_type: 'ALL' },
  { label: { step: 'STEP 1', description: '커리어탐색' }, career_type: 'CAREER_EXPLORE' },
  { label: { step: 'STEP 2', description: '서류 준비' }, career_type: 'DOCUMENT_PREPARE' },
  { label: { step: 'STEP 3', description: '면접 준비' }, career_type: 'INTERVIEW_PREPARE' },
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
    <div className="flex justify-center">
      <div className="relative w-full max-w-[350px] md:max-w-[612px] h-[50px] desktop:h-[68px] mt-[72px] desktop:mt-[90px] mb-[8px] gap-[8px] border-t border-t-[0.8px] border-transparent 
      inline-flex justify-center text-sm bg-white desktop:px-[8px] desktop:py-[8px] px-[8px] py-[8px] ">
        <section className="flex w-full h-full rounded-3xl overflow-hidden border justify-center items-center desktop:gap-[4px]">
          {items.map((item) => (
            <button
              key={item.career_type}
              className={`box-border px-[8px] desktop:px-[10px] py-[8px] desktop:py-[8px] w-[82px] desktop:w-[142px] h-[38px] mx-[0.8px] items-center leading-none whitespace-pre-line ${
                activeItem.includes(item.career_type)
                  ? 'bg-Primary-100 text-white' // 활성화된 상태일 때
                  : 'bg-white text-Neutral-grayscale-45' // 비활성화된 상태일 때
              }`}
              style={{
                borderRadius: '320px',
              }}
              onClick={() => handleClick(item.career_type)}
            >
              <div className="flex flex-col items-center">
                <span className="text-[9.6px]">{item.label.step}</span>
                {item.label.description && (
                  <span className="text-xs font-semibold">{item.label.description}</span>
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