import React, { Dispatch, SetStateAction } from 'react';
import { Checked, Unchecked } from '../../assets/svg';

interface Props {
  activeItems: string[];
  setActiveItems: Dispatch<SetStateAction<string[]>>;
}

const TypeFilter: React.FC<Props> = ({ activeItems, setActiveItems }) => {
  const handleClick = (programType: string) => {
    if (activeItems.includes(programType)) {
      setActiveItems(activeItems.filter((item) => item !== programType));
    } else {
      setActiveItems([...activeItems, programType]);
    }
  };

  return (
    <div className="flex items-center w-full lg:w-[1200px] mx-auto">
      <div
        className="flex gap-[8px] ml-2 mt-[16px] sm:mt-[20px] mb-[20px] h-[32px] justify-center items-center text-[14px] sm:text-[16px] font-pretendard font-semibold 
        py-[8px] pl-[5px] pr-[16px]"
      >
        <div className="flex gap-[12px] ml-2 mt-[8px] mb-[20px] h-[32px] justify-center items-center ">
          <button
            className={`w-[88px] h-[36px] sm:w-[94px] sm:h-[40px] flex items-center justify-center rounded-full border ${
              activeItems.includes('CHALLENGE')
                ? 'bg-Primary-10 text-Primary-100 border-Primary-50'
                : 'bg-white text-Neutral-grayscale-40 border-Neutral-grayscale-80'
            }`}
            onClick={() => handleClick('CHALLENGE')}
          >
            {activeItems.includes('CHALLENGE') ? (
              <Checked className="w-[16px] h-[16px]" />
            ) : (
              <Unchecked className="w-[16px] h-[16px]" />
            )}
            <span className="ml-2">챌린지</span>
          </button>
          <button
            className={`w-[120px] h-[36px] sm:w-[130px] sm:h-[40px] flex items-center justify-center rounded-full border ${
              activeItems.includes('LIVECLASS')
                ? 'bg-Primary-10 text-Primary-100 border-Primary-50'
                : 'bg-white text-Neutral-grayscale-40 border-Neutral-grayscale-80'
            }`}
            onClick={() => handleClick('LIVECLASS')}
          >
            {activeItems.includes('LIVECLASS') ? (
              <Checked className="w-[16px] h-[16px]" />
            ) : (
              <Unchecked className="w-[16px] h-[16px]" />
            )}
            <span className="ml-2">LIVE 클래스</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
