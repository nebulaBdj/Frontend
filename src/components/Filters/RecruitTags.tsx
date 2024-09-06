import React from 'react';

export enum RecruitState {
  RECRUITING = 'recruiting',
  ENDED = 'ended',
}

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: RecruitState) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return 'bg-Primary-10 text-Primary-100';
    case RecruitState.ENDED:
      return 'bg-Neutral-grayscale-80 text-Neutral-grayscale-35';
    default:
      return '';
  }
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: RecruitState) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return '모집 중';
    case RecruitState.ENDED:
      return '마감';
    default:
      return '';
  }
};

interface RecruitTagProps {
  status: RecruitState;  // RecruitState enum을 사용하도록 업데이트
}

const RecruitTags: React.FC<RecruitTagProps> = ({ status }) => {
  const tagStyles = getTagStyles(status);
  const statusText = getStatusText(status);

  // 상태에 따른 크기 설정
  const isRecruiting = status === RecruitState.RECRUITING;
  const width = isRecruiting ? 'w-[54px]' : 'w-[41px]'; // 모집 중일 때 더 큰 너비

  return (
    <div className={`flex justify-center items-center px-[10px] py-[4px] mr-[6px] rounded-lg gap-1 ${width} ${tagStyles}`}>
      <div className={`flex items-center justify-center text-xs font-medium whitespace-nowrap`}>
        {statusText}
      </div>
    </div>
  );

};

// 백엔드에서 상태를 받아오는 컴포넌트
// const RecruitStatus: React.FC = () => {
//   const [status, setStatus] = useState<RecruitState | null>(null);

//   useEffect(() => {
//     // 백엔드에서 데이터 요청
//     const fetchStatus = async () => {
//       try {
//         const response = await axios.get('/api/recruit-status'); // 실제 API 엔드포인트로 교체
//         setStatus(response.data.status); // 상태를 상태로 설정
//       } catch (error) {
//         console.error('Failed to fetch recruit status:', error);
//         setStatus(RecruitState.ENDED); // 기본값 설정
//       }
//     };

//     fetchStatus();
//   }, []);

//   // 상태가 아직 로드되지 않은 경우 로딩 상태 표시
//   if (status === null) {
//     return <div>Loading...</div>;
//   }

//   return <RecruitTags status={status} />;
// };

export default RecruitTags;
