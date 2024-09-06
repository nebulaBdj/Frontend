import { useState } from 'react';
import { FAQ } from '../../types/ProgramDetailType';

interface Props {
  faqList: FAQ[];
}

export default function TabFAQ({ faqList }: Props) {
  // 각 FAQ 항목의 토글 상태를 관리하는 상태
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 토글 함수
  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // 클릭한 항목이 이미 열려있으면 닫고, 아니면 열기
  };

  return (
    <section className="max-w-2xl mx-auto font-pretendard">
      <h2 className="text-center font-bold text-2xl text-Neutral-grayscale-0 mt-2 mb-[72px]">
        무엇이든 물어보세요
      </h2>

      <div>
        {faqList.map((faq, index) => (
          <div key={faq.order} className="w-[350px] mb-4 mx-auto">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-[10px] py-5 bg-Neutral-grayscale-100 rounded-2xl focus:outline-none border-[1px] border-Black_Opacity-12 mb-2"
            >
              <div className="flex items-center">
                <span className="text-Primary-100 font-semibold text-[26px] mr-2">Q</span>
                <p className="w-[260px] text-Neutral-grayscale-30 font-semibold text-base text-left ">
                  {faq.question}
                </p>
              </div>
              <span className="text-gray-500">{activeIndex === index ? '▾' : '▸'}</span>
            </button>
            {activeIndex === index && (
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
