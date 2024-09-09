interface SuccessRateProps {
  passedRate: number;
}

export default function SuccessRate({ passedRate }: SuccessRateProps) {
  // passedRate가 0에서 100 사이인지 확인
  const normalizedRate = Math.max(0, Math.min(passedRate, 100));

  // 반원 호의 둘레 길이 계산 (반지름 * PI)
  const radius = 40; // 반지름
  const circumference = Math.PI * radius;

  // strokeDashoffset 계산
  const offset = circumference - (normalizedRate / 100) * circumference;

  return (
    <div className="relative w-40 h-20 flex justify-center items-center">
      {/* SVG 반원 차트 */}
      <svg width="100%" height="100%" viewBox="0 0 100 50">
        {/* 배경 회색 반원 */}
        <path d="M 10,50 A 40,40 0 0,1 90,50" stroke="#E7E7E7" strokeWidth="15" fill="none" />
        {/* 파란색 진행률 반원 */}
        <path
          d="M 10,50 A 40,40 0 0,1 90,50"
          stroke="#4D55F5"
          strokeWidth="15"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {/* 중앙에 퍼센트 텍스트 표시 */}
      <div className="absolute top-16 text-2xl font-semibold text-center text-Neutral-grayscale-0">
        {normalizedRate}
        <span className="text-lg font-medium">%</span>
      </div>
    </div>
  );
}
