import DetailThumbnail from '../../components/Thumbnail/DetailThumbnail';
import BestReview from '../../components/Review/BestReview';
import Tabs from '../../components/Tabs/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DETAILDATA } from '../../types/ProgramDetailType';
import { DUMMY_DATA } from '../../assets/dummy/DetailPageDummy';
import PassedRate from '../../components/Average/PassedRate';
import GradeAverage from '../../components/Average/GradeAverage';
import FixedSummitButton from '../../components/Buttons/FixedSummitButton';

export default function DetailPage() {
  const { programId } = useParams<{ programId: string }>();
  const [detailData, setDetailData] = useState<DETAILDATA>();

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
      <DetailThumbnail />

      {detailData && (
        <section className="w-full flex justify-center items-center mt-5 mb-8 lg:flex-row flex-col text-center font-pretendard">
          <h1 className="text-2xl font-bold mb-10">렛크커리어가 이뤄낸 성과</h1>
          <PassedRate passedRate={detailData.passedRate} />
          <GradeAverage gradeAverage={detailData.gradeAverage} gradeCount={detailData.gradeCount} />
        </section>
      )}

      {detailData?.bestReviews && (
        <BestReview bestReview={detailData.bestReviews} programTitle={detailData.title} />
      )}

      {detailData && (
        <Tabs
          hookingArr={detailData.hooking || DUMMY_DATA.hooking} // 기본값으로 빈 배열 사용
          programIntro={detailData.description || DUMMY_DATA.description} // 기본값으로 DUMMY_DATA 사용
          lecturerIntro={detailData.lecturer || DUMMY_DATA.lecturer}
          curriculums={detailData.curriculum || DUMMY_DATA.curriculum}
          latestReviews={detailData.latestReviews || DUMMY_DATA.latestReviews}
          faq={detailData.faq || DUMMY_DATA.faq}
        />
      )}
      {/* <FixedSummitButton program={} /> */}
    </main>
  );
}
