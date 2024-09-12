import { useState } from 'react';
import { FAQ } from '../../types/ProgramDetailType';

interface Props {
  faqList: FAQ[];
}

export default function TabFAQ({ faqList }: Props) {
  // 각 FAQ 항목의 열림 상태를 관리하는 상태 (배열로 관리)
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  // 토글 함수 (여러 항목을 동시에 열 수 있게 배열로 관리)
  const toggleFAQ = (index: number) => {
    if (activeIndexes.includes(index)) {
      // 이미 열려 있으면 닫기 (배열에서 제거)
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      // 열기 (배열에 추가)
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <section className="mx-auto font-pretendard">
      <div>
        {faqList.map((faq, index) => (
          <div key={faq.order} className="w-[350px] lg:w-[930px] mb-4 mx-auto">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-[10px] py-5 bg-Neutral-grayscale-100 rounded-2xl focus:outline-none border-[1px] border-Black_Opacity-12 mb-2"
            >
              <div className="flex items-center">
                <span className="text-Primary-100 font-semibold text-[26px] mr-2 lg:ml-5">Q</span>
                <p className="w-[260px] lg:w-[835px] text-Neutral-grayscale-30 font-semibold text-base text-left ">
                  {faq.question}
                </p>
              </div>
              <span className="text-gray-500">{activeIndexes.includes(index) ? '▾' : '▸'}</span>
            </button>
            {activeIndexes.includes(index) && (
              <div className="p-[30px] text-sm font-medium text-Neutral-grayscale-30 bg-Neutral-grayscale-100 rounded-2xl border-[1px] border-Black_Opacity-12">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
