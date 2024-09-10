import DetailThumbnail from '../../components/Thumbnail/DetailThumbnail';
import BestReview from '../../components/Review/BestReview';
import Tabs from '../../components/Tabs/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DETAILDATA } from '../../types/ProgramDetailType';
// import { DUMMY_DATA } from '../../assets/dummy/DetailPageDummy';
import PassedRate from '../../components/Average/PassedRate';
import GradeAverage from '../../components/Average/GradeAverage';
// import FixedSummitButton from '../../components/Buttons/FixedSummitButton';

export default function DetailPage() {
  const { programId } = useParams<{ programId: string }>();
  const [detailData, setDetailData] = useState<DETAILDATA>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하일 때 모바일 이미지 사용
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로드 시에도 확인

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`https://letmec.p-e.kr/program/${programId}`);
        setDetailData(res.data.result);
      } catch (error) {
        console.log('에러 발생', error);
      }
    };

    fetchDetail();
  }, [programId]);

  console.log('데이터 확인', detailData);

  return (
    <main>
      <DetailThumbnail isMobile={isMobile} />

      {detailData && (
        <section className="w-[390px] flex justify-center items-center text-center mt-5 mb-8 mx-auto flex-col font-pretendard lg:w-[84%]">
          <h1 className="text-2xl font-bold mb-10">렛츠커리어가 이뤄낸 성과</h1>
          <div className="w-[350px] mx-auto lg:flex lg:flex-row lg:w-[738px] lg:justify-evenly">
            <PassedRate passedRate={detailData.passedRate} />
            <GradeAverage
              gradeAverage={detailData.gradeAverage}
              gradeCount={detailData.gradeCount}
            />
          </div>
        </section>
      )}

      {detailData?.bestReviews && (
        <BestReview bestReview={detailData.bestReviews} programTitle={detailData.title} />
      )}

      {detailData && (
        <Tabs
          hookingArr={detailData.hooking} // 기본값으로 빈 배열 사용
          programIntro={detailData.description} // 기본값으로 DUMMY_DATA 사용
          lecturerIntro={detailData.lecturer}
          curriculums={detailData.curriculum}
          latestReviews={detailData.latestReviews}
          faq={detailData.faq}
          isMobile={isMobile}
        />
      )}
      {/* <FixedSummitButton program={} /> */}
    </main>
  );
}
