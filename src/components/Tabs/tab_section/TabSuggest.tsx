import { useEffect, useState } from 'react';
import { RecommendedProgram } from '../../../types/ProgramDetailType';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';
import { RecommendedProgramSchema } from '../../../types/DetailSchema';
import { z } from 'zod';

export default function TabSuggest() {
  const [activeTab, setActiveTab] = useState('CAREER_EXPLORE'); // 현재 선택된 탭 상태
  const { programId } = useParams<{ programId: string }>();

  // 각 탭별 프로그램 필터링
  const [filteredPrograms, setFilteredPrograms] = useState<RecommendedProgram[]>([]);

  useEffect(() => {
    const fetchRecommendedPrograms = async () => {
      try {
        const res = await axios.get(
          `https://letmec.p-e.kr/program/${programId}/recommended/${activeTab}`,
        );
        const fetchedPrograms = res.data.result.recommendedPrograms;

        const parsedData = z.array(RecommendedProgramSchema).safeParse(fetchedPrograms);

        if (!parsedData.success) {
          console.error('검증 실패', parsedData.error);
          setFilteredPrograms([]);
          return;
        }
        setFilteredPrograms(parsedData.data);
      } catch (error) {
        console.log('에러 발생', error);
        setFilteredPrograms([]);
      }
    };
    fetchRecommendedPrograms();
  }, [activeTab, programId]); //

  return (
    <section className="mx-auto px-4 lg:w-[905px] font-pretendard">
      <div className="flex justify-around space-x-8 mb-[72px] w-[350px] mx-auto">
        {['CAREER_EXPLORE', 'DOCUMENT_PREPARE', 'INTERVIEW_PREPARE'].map((tag, index) => (
          <div
            key={tag}
            onClick={() => {
              setActiveTab(tag);
            }}
            className={`text-center cursor-pointer ${
              activeTab === tag
                ? 'text-Neutral-grayscale-10 border-b-2 border-Primary-100'
                : 'text-Neutral-grayscale-70'
            }`}
          >
            <p
              className={`font-medium text-xs lg:text-sm ${activeTab === tag ? 'text-Neutral-grayscale-10' : 'text-Neutral-grayscale-70'}`}
            >
              STEP{index + 1}
            </p>
            <p
              className={`font-semibold text-sm lg:text-lg ${activeTab === tag ? 'text-Neutral-grayscale-10' : 'text-Neutral-grayscale-70'}`}
            >
              {tag === 'CAREER_EXPLORE'
                ? '커리어 탐색'
                : tag === 'DOCUMENT_PREPARE'
                  ? '서류 준비'
                  : '면접 준비'}
            </p>
          </div>
        ))}
      </div>

      {/* 프로그램 목록 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {filteredPrograms.slice(0, 3).map((program) => (
          <a
            key={program.recommendedProgramId}
            className="bg-white rounded-lg shadow p-4 mx-auto w-[276px] font-pretendard whitespace-pre-line"
            href={`/program/${program.recommendedProgramId}`}
          >
            <img
              src={program.thumbnail}
              alt={program.title}
              className="w-[255px] h-[164px] object-cover rounded mb-4"
            />
            <h3 className="font-bold text-base mb-1 text-Neutral-grayscale-0">{program.title}</h3>
            <p className="text-sm text-Neutral-grayscale-30 mb-2">{program.intro}</p>
            <p className="text-xs text-Neutral-grayscale-0">
              진행일정:
              <span className="text-[#4138A3]">
                {formatDate(program.programStartDate)} ~ {formatDate(program.programEndDate)}
              </span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
