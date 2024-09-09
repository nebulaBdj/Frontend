import { Lecturer } from '../../types/ProgramDetailType';

interface Props {
  lecturerData: Lecturer;
}

export default function TabLecturerIntro({ lecturerData }: Props) {
  if (lecturerData.templateType === 'image') {
    // templateType이 'image'인 경우 이미지만 렌더링
    return (
      <section className="flex justify-center items-center p-8 mx-auto">
        <img
          src={lecturerData.profileImage}
          alt={lecturerData.name}
          className="w-full h-auto rounded-lg"
        />
      </section>
    );
  }

  return (
    <section className="mx-auto px-4 text-center font-pretendard whitespace-pre-line">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-6">
        자기소개서 전문가 {lecturerData.name}
      </h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={lecturerData.profileImage}
          alt={lecturerData.name}
          className="w-48 h-48 object-cover"
        />
      </div>

      {/* Name and Nickname */}
      <div className="flex justify-center items-baseline text-center text-Neutral-grayscale-10 mb-4">
        <p className="text-xl font-semibold mr-2">{lecturerData.name}</p>
        <p className="text-xs font-semibold">{lecturerData.nickname}</p>
      </div>

      {/* Career */}
      <div className="w-[200px] mx-auto text-center">
        <p className="text-start text-sm text-Neutral-grayscale-30 mb-6 mx-auto">
          {lecturerData.career}
        </p>
      </div>

      {/* Introduction */}
      <p className="text-sm text-Neutral-grayscale-30">{lecturerData.introduce}</p>
    </section>
  );
}
