import SuccessRate from '../../assets/svg/SuccessRate';

interface Props {
  passedRate: number;
}

export default function PassedRate({ passedRate }: Props) {
  return (
    <div className="flex flex-col items-center justify-center lg:w-auto mb-6 lg:mb-0">
      <p className="text-lg lg:text-xl font-semibold mb-4">수강생 취직 합격률</p>
      <SuccessRate passedRate={passedRate} />
    </div>
  );
}
