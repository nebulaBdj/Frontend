interface Props {
  isMobile: boolean;
}

export default function DetailThumbnail({ isMobile }: Props) {
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
