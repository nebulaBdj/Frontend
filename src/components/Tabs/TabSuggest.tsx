import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RecommendedProgram } from '../../types/ProgramDetailType';

interface Props {
  recommendedPrograms: RecommendedProgram[];
}

export default function TabSuggest({ recommendedPrograms }: Props) {
  const [activeTab, setActiveTab] = useState('탐색'); // 현재 선택된 탭 상태
  const navigate = useNavigate();

  // 각 탭별 프로그램 필터링
  const filteredPrograms = recommendedPrograms.filter((program) => program.tag === activeTab);

  return (
    <section className="mx-auto px-4 max-w-xl font-pretendard">
      <p className="text-center font-bold text-2xl mt-1 mb-[72px]">이런 강좌는 어떠세요?</p>

      <div className="flex justify-around space-x-8 mb-[72px] w-[350px] mx-auto">
        {['탐색', '서류', '면접'].map((tag, index) => (
          <div
            key={tag}
            onClick={() => {
              setActiveTab(tag);
              navigate('/program/1');
            }}
            className={`text-center cursor-pointer ${
              activeTab === tag
                ? 'text-Neutral-grayscale-10 border-b-2 border-Primary-100'
                : 'text-Neutral-grayscale-70'
            }`}
          >
            <p
              className={`font-medium text-xs ${activeTab === tag ? 'text-Neutral-grayscale-10' : 'text-Neutral-grayscale-70'}`}
            >
              STEP{index + 1}
            </p>
            <p
              className={`font-semibold text-sm ${activeTab === tag ? 'text-Neutral-grayscale-10' : 'text-Neutral-grayscale-70'}`}
            >
              {tag === '탐색' ? '커리어 탐색' : tag === '서류' ? '서류 준비' : '면접 준비'}
            </p>
          </div>
        ))}
      </div>

      {/* 프로그램 목록 */}
      <div className="grid gap-4">
        {filteredPrograms.slice(0, 3).map((program) => (
          <div
            key={program.programId}
            className="bg-white rounded-lg shadow p-4 mx-auto w-[276px] font-pretendard whitespace-pre-line"
          >
            <img
              src={program.thumbnail}
              alt={program.title}
              className="w-[255px] h-[164px] object-cover rounded mb-4"
            />
            <h3 className="font-bold text-base mb-1">{program.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{program.intro}</p>
            <p className="text-xs text-gray-400">
              모집 마감: {program.recruitEndDate} / 진행일정: {program.programStartDate} ~{' '}
              {program.programEndDate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
