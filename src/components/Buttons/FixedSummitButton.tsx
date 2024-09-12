import { useMemo } from 'react';
import { RecruitState } from '../../components/Filters/RecruitTags';

interface SummitBtnProps {
  title: string;
  recruitEndDate: string;
}

const FixedSummitButton: React.FC<SummitBtnProps> = ({ title, recruitEndDate }) => {
  // 오늘을 기준으로 recruitEndDate 비교해 상태 계산
  const recruitStatus = useMemo(() => {
    const currentDate = new Date();
    const endDate = new Date(recruitEndDate);

    return currentDate > endDate ? RecruitState.ENDED : RecruitState.RECRUITING;
  }, [recruitEndDate]);

  // deadline 계산 (남은 일수)
  const deadline = useMemo(() => {
    const currentDate = new Date();
    const endDate = new Date(recruitEndDate);

    const timeDiff = endDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // 밀리초를 일수로 변환
    return daysLeft;
  }, [recruitEndDate]);

  // 버튼 클릭 처리
  const handleClick = () => {
    if (recruitStatus === RecruitState.ENDED) {
      alert('재출시 알림 신청이 완료되었습니다!');
    }
    if (recruitStatus === RecruitState.RECRUITING) {
      alert('신청 되었습니다. 감사합니다 :)');
    }
  };

  // 상태에 따른 태그 렌더링
  const renderRecruitStatusTag = () => {
    const statusConfig = {
      [RecruitState.ENDED]: {
        label: '신청마감',
        style: 'w-[64px] h-[30px] bg-Neutral-grayscale-85 text-Neutral-grayscale-35 text-sm',
      },
      [RecruitState.RECRUITING]: {
        label: `D-${deadline}`,
        style: 'w-[64px] h-[30px] bg-Primary-100 text-white text-sm pt-1',
      },
    };

    const config = statusConfig[recruitStatus];
    return config ? (
      <div className={`${config.style} text-14px text-center rounded-lg font-normal`}>
        {config.label}
      </div>
    ) : null;
  };

  // 버튼의 라벨 렌더링
  const renderButtonLabel = () => {
    const buttonConfig = {
      [RecruitState.RECRUITING]: {
        label: '신청하기',
        style: 'w-[100px] h-[30px] font-semibold text-Neutral-grayscale-100',
      },
      [RecruitState.ENDED]: {
        label: '재출시 알림 신청하기',
        style: 'w-[250px] h-[30px] font-semibold text-Point-Normal',
      },
    };

    const config = buttonConfig[recruitStatus];
    return config ? <div className={`${config.style} text-center`}>{config.label}</div> : null;
  };

  return (
    <div className="fixed lg:flex lg:justify-between bottom-4 left-1/2 transform -translate-x-1/2 w-[390px] lg:w-[960px] h-[108px] lg:h-[80px] p-[10px] bg-Neutral-grayscale-100 rounded-xl font-Pretendard shadow">
      <div className="flex gap-[12px] lg:my-auto">
        {renderRecruitStatusTag()}
        <p className="text-base lg:text-xl text-Neutral-grayscale-10 font-semibold whitespace-nowrap">
          {title}
        </p>
      </div>

      <button
        className="w-[370px] lg:w-[400px] h-[50px] flex justify-center items-center lg:my-auto rounded-xl mt-[8px] bg-Neutral-grayscale-0 text-xl lg:text-2xl pointer-events-auto"
        onClick={handleClick}
      >
        {renderButtonLabel()}
      </button>
    </div>
  );
};

export default FixedSummitButton;
