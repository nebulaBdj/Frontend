import React, { useRef, useEffect, useState } from 'react';
import {
  Curriculum,
  Description,
  FAQ,
  Hooking,
  Lecturer,
  Review,
} from '../../types/ProgramDetailType';
import TabHookingImages from './TabHookingImages';
import TabDescription from './TabDescription';
import TabLecturerIntro from './TabLecturerIntro';
import TabCurriculum from './TabCurriculum';
import TabLatestReview from './TabLatestReview';
import TabSuggest from './TabSuggest';
import TabFAQ from './TabFAQ';

interface Props {
  hookingArr?: Hooking[];
  programIntro: Description[];
  lecturerIntro: Lecturer;
  curriculums: Curriculum[];
  latestReviews: Review[];
  faq: FAQ[];
}

export default function Tabs({
  hookingArr,
  programIntro,
  lecturerIntro,
  curriculums,
  latestReviews,
  faq,
}: Props) {
  const [activeTab, setActiveTab] = useState('programIntro');
  const [isSticky, setIsSticky] = useState(false);
  const tabRef = useRef<HTMLDivElement | null>(null);
  const programIntroRef = useRef<HTMLElement | null>(null);
  const lecturerIntroRef = useRef<HTMLElement | null>(null);
  const curriculumRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  // const recommendRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleStickyTab = () => {
      const tabPosition = tabRef.current?.getBoundingClientRect();
      const navigationHeight = 60; // 네비게이션 바 높이 조정 (px 단위)

      if (tabPosition && tabPosition.top <= navigationHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleStickyTab);

    return () => {
      window.removeEventListener('scroll', handleStickyTab);
    };
  }, []);

  // 각 섹션의 IntersectionObserver 설정
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id); // 스크롤이 해당 섹션에 도달하면 activeTab 변경
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (programIntroRef.current) observer.observe(programIntroRef.current);
    if (lecturerIntroRef.current) observer.observe(lecturerIntroRef.current);
    if (curriculumRef.current) observer.observe(curriculumRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);
    // if (recommendRef.current) observer.observe(recommendRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 각 탭 메뉴 클릭 시 스크롤 이동
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>, tabName: string) => {
    if (sectionRef.current) {
      setActiveTab(tabName); // 클릭할 때 activeTab을 변경
      window.scrollTo({
        top: sectionRef.current.offsetTop - (tabRef.current?.offsetHeight || 0),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="lg:w-[1200px] mx-auto">
      {/* 탭 메뉴 */}
      <div
        ref={tabRef}
        className={`h-[74px] z-10 bg-white duration-300 ${isSticky ? 'sticky top-[60px]' : ''}`}
      >
        <nav className="flex justify-around font-pretendard">
          <button
            className={`h-[74px] relative font-semibold text-lg ${activeTab === 'programIntro' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(programIntroRef, 'programIntro')}
          >
            프로그램 소개
          </button>
          <button
            className={`h-[74px] relative font-semibold text-lg ${activeTab === 'lecturerIntro' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(lecturerIntroRef, 'lecturerIntro')}
          >
            연사 소개
          </button>
          <button
            className={`h-[74px] relative font-semibold text-lg ${activeTab === 'curriculum' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(curriculumRef, 'curriculum')}
          >
            커리큘럼
          </button>
          <button
            className={`h-[74px] relative font-semibold text-lg ${activeTab === 'reviews' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(reviewsRef, 'reviews')}
          >
            후기
          </button>
          {/* <button
            className={`relative font-semibold ${activeTab === 'recommend' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(recommendRef, 'recommend')}
          >
            추천 강좌
          </button> */}
          <button
            className={`h-[74px] relative font-semibold text-lg ${activeTab === 'faq' ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
            onClick={() => scrollToSection(faqRef, 'faq')}
          >
            FAQ
          </button>
        </nav>
      </div>

      {/* 탭 메뉴와 연결된 섹션들 */}
      <section ref={programIntroRef} id="programIntro" className="bg-Primary-10 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          프로그램 소개
        </h3>
        {programIntro.map((introData, i) => {
          return <TabDescription key={i} introData={introData} />;
        })}
      </section>

      <section
        ref={lecturerIntroRef}
        id="lecturerIntro"
        className="bg-Neutral-grayscale-100 w-full py-20"
      >
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          연사 소개
        </h3>
        <TabLecturerIntro lecturerData={lecturerIntro} />
      </section>

      <section ref={curriculumRef} id="curriculum" className="bg-Neutral-grayscale-90 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          커리큘럼 소개
        </h3>
        <p className="font-pretendard text-center font-bold text-2xl mt-2 mb-[72px]">
          이런 것을 배웁니다
        </p>
        {curriculums.map((curriculum, i) => {
          return <TabCurriculum key={i} curriculum={curriculum} />;
        })}
      </section>

      <section ref={reviewsRef} id="reviews" className="bg-Neutral-grayscale-90 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          강의 후기
        </h3>
        <TabLatestReview reviews={latestReviews} />
      </section>

      <section className="bg-Neutral-grayscale-100 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          추천 강좌
        </h3>
        <TabSuggest />
      </section>

      <section ref={faqRef} id="faq" className="bg-Neutral-grayscale-100 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">FAQ</h3>
        <TabFAQ faqList={faq} />
      </section>
    </section>
  );
}
