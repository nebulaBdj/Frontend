import { useEffect, useState } from 'react';

export default function DetailThumbnail() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하일 때 모바일 이미지 사용
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로드 시에도 확인

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className=" bg-slate-600 w-[390px] h-[410px] mx-auto mt-[60px] lg:w-[1200px] lg:h-[614px]">
      <img
        src={isMobile ? '/svg/detail_mobile_thumbnail.svg' : '/svg/detail_desktop_thumbnail.svg'}
        width={'100%'}
        alt="썸네일 사진"
      />
    </section>
  );
}
