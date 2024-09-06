import React from 'react';

interface NotifyButtonProps {
  onClick: () => void;
}

const NotifyButton: React.FC<NotifyButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute w-[149px] h-[36px] sm:w-[254px] sm:h-[52px] bg-Neutral-grayscale-0 text-Point-Normal rounded
      text-[14px] sm:text-[18px]'>
      출시알림신청
    </button>
  );
};

export default NotifyButton;
