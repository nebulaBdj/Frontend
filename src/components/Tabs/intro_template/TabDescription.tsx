import { Description } from '../../../types/ProgramDetailType';

interface Props {
  introData: Description;
  isMobile: boolean;
}

export default function TabDescription({ introData, isMobile }: Props) {
  console.log(introData);

  return (
    <article>
      <section className="max-w-2xl mx-auto mb-8 font-pretendard whitespace-pre-line">
        {/* 제목 */}
        {introData.title && (
          <h2 className="text-2xl font-bold text-Neutral-grayscale-0 text-center mt-2 mb-14">
            {introData.title}
          </h2>
        )}

        {/* 해시태그 */}
        {introData.hashtags && (
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            {introData.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-Neutral-grayscale-100 text-Primary-100 font-medium py-1 px-3 rounded-lg border-[1px] border-Primary-100"
              >
                {tag.hashtag}
              </span>
            ))}
          </div>
        )}

        {/* 내용 */}
        {introData.content && (
          <p className="text-Neutral-grayscale-10 text-base mb-14">{introData.content}</p>
        )}

        {/* 이미지 */}
        {introData.descriptionImages && (
          <div className="flex justify-center">
            {introData.descriptionImages.map((image, index) => (
              <img
                key={index}
                src={isMobile ? image.imageUrl : image.pcImageUrl}
                alt={`description-image-${index}`}
                className="max-w-full h-auto rounded-lg"
              />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
