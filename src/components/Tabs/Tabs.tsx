import React, { useRef, useEffect, useState } from 'react';
import {
  Curriculum,
  Description,
  FAQ,
  Hooking,
  Lecturer,
  Review,
} from '../../types/ProgramDetailType';
import TabMenuBTN from './TabMenuBTN';
import TabHookingImages from './intro_template/TabHookingImages';
import TabDescription from './intro_template/TabDescription';
import TabLecturerIntro from './lecturer_template/TabLecturerIntro';
import TabCurriculum from './tab_section/TabCurriculum';
import TabLatestReview from './tab_section/TabLatestReview';
import TabSuggest from './tab_section/TabSuggest';
import TabFAQ from './tab_section/TabFAQ';

interface Props {
  hookingArr?: Hooking[];
  programIntro: Description[];
  lecturerIntro: Lecturer;
  curriculums: Curriculum[];
  latestReviews: Review[];
  faq: FAQ[];
  isMobile: boolean;
}

export default function Tabs({
  programIntro,
  lecturerIntro,
  curriculums,
  latestReviews,
  hookingArr,
  faq,
  isMobile,
}: Props) {
  const [activeTab, setActiveTab] = useState('programIntro');
  const [isSticky, setIsSticky] = useState(false);
  const tabRef = useRef<HTMLDivElement | null>(null);
  const programIntroRef = useRef<HTMLElement | null>(null);
  const lecturerIntroRef = useRef<HTMLElement | null>(null);
  const curriculumRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleStickyTab = () => {
      const tabPosition = tabRef.current?.getBoundingClientRect();
      const navigationHeight = 60; // 네비게이션 바 높이 지정 후 바로 아래로 고정

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
      <div
        ref={tabRef}
        className={`h-[74px] z-10 bg-white duration-300 ${isSticky ? 'sticky top-[60px]' : ''}`}
      >
        <nav className="flex justify-around font-pretendard">
          <TabMenuBTN
            tabBtnTitle="프로그램 소개"
            tabBtnSection="programIntro"
            sectionRef={programIntroRef}
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />

          <TabMenuBTN
            tabBtnTitle="연사 소개"
            tabBtnSection="lecturerIntro"
            sectionRef={lecturerIntroRef}
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />

          <TabMenuBTN
            tabBtnTitle="커리큘럼"
            tabBtnSection="curriculum"
            sectionRef={curriculumRef}
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />

          <TabMenuBTN
            tabBtnTitle="후기"
            tabBtnSection="reviews"
            sectionRef={reviewsRef}
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />

          <TabMenuBTN
            tabBtnTitle="FAQ"
            tabBtnSection="faq"
            sectionRef={faqRef}
            activeTab={activeTab}
            scrollToSection={scrollToSection}
          />
        </nav>
      </div>

      {/* 프로그램 소개 */}
      {hookingArr &&
        hookingArr.map((hookinData, i) => {
          return <TabHookingImages key={i} hookingData={hookinData} isMobile={isMobile} />;
        })}

      <section ref={programIntroRef} id="programIntro" className="bg-Primary-10 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          프로그램 소개
        </h3>
        {programIntro.map((introData, i) => {
          return <TabDescription key={i} introData={introData} isMobile={isMobile} />;
        })}
      </section>

      {/* 연사 소개 */}
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

      {/* 커리큘럼 */}
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

      {/* 강의 후기 */}
      <section ref={reviewsRef} id="reviews" className="bg-Neutral-grayscale-90 w-full py-20">
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">
          강의 후기
        </h3>
        <p className="font-pretendard text-center font-bold text-2xl mt-2 mb-[50px]">
          실제 수강생들의 솔직한 후기
        </p>
        <TabLatestReview reviews={latestReviews} />
      </section>

      {/* 추천 강좌 */}
      <section className="bg-Neutral-grayscale-100 w-full py-20 font-pretendard">
        <h3 className="font-medium text-lg text-Primary-100 text-center">추천 강좌</h3>
        <p className="text-center font-bold text-2xl mt-1 mb-[72px]">이런 강좌는 어떠세요?</p>
        <TabSuggest />
      </section>

      {/* FAQ */}
      <section
        ref={faqRef}
        id="faq"
        className="bg-Neutral-grayscale-100 w-full py-20 font-pretendard"
      >
        <h3 className="font-pretendard font-medium text-lg text-Primary-100 text-center">FAQ</h3>
        <h2 className="text-center font-bold text-2xl text-Neutral-grayscale-0 mt-2 mb-[72px]">
          무엇이든 물어보세요
        </h2>
        <TabFAQ faqList={faq} />
      </section>
    </section>
  );
}
