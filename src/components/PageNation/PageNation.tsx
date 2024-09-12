import React, { useEffect } from 'react';

export interface PageNationProps {
  currentPage: number; // 사용자가 선택한 페이지
  totalPages: number; // 사용자가 페이지 번호를 클릭했을 때 호출되는 함수
  handlePageChange: (pageNumber: number) => void;
}

const PageNation: React.FC<PageNationProps> = ({ totalPages, currentPage, handlePageChange }) => {

  const pageNumbers: number[] = []; // 배열을 생성한 후, 반복문을 사용하여 배열의 각 요소(페이지 번호)를 렌더링
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 기본 첫페이지 설정
  useEffect(() => {
    if (currentPage === 0 && totalPages > 0) {
      handlePageChange(1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  // 페이지 변경 핸들러 통합, newPage: 사용자가 이동하려는 새로운 페이지 번호
  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      handlePageChange(newPage);
    }
  };

  const handlePrevious = () => changePage(currentPage - 1);
  const handleNext = () => changePage(currentPage + 1);
  const handleFirst = () => changePage(1);
  const handleLast = () => changePage(totalPages);

  const pageRange = totalPages <= 5
    ? pageNumbers
    : pageNumbers.slice(
      Math.max(0, currentPage - 2),
      Math.min(totalPages, currentPage + 1)
    );

  return (
    <nav className="flex justify-center mt-8 mb-[100px]">
      <ul className="inline-flex overflow-hidden">
        {/* 맨 첫 페이지로 이동 */}
        <li>
          <button
            onClick={handleFirst}
            className={`px-4 py-2 ${currentPage === 1 ? 'text-Neutral-grayscale-75' : 'text-Black_Opacity-100'}`}
            disabled={currentPage === 1}
          >
            {'<<'}
          </button>
        </li>

        {/* 이전 페이지로 이동 */}
        <li>
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 ${currentPage === 1 ? 'text-Neutral-grayscale-75' : 'text-Black_Opacity-100'}`}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
        </li>

        {/* 페이지 번호 */}
        {pageRange.map((number) => (
          <li key={number}>
            <button
              onClick={() => changePage(number)}
              className={`px-4 py-2 ${currentPage === number
                ? 'bg-Primary-100 text-white rounded-full'
                : 'text-Black_Opacity-100'}`}>
              {number}
            </button>
          </li>
        ))}

        {/* 다음 페이지로 이동 */}
        <li>
          <button
            onClick={handleNext}
            className={`px-4 py-2 ${currentPage === totalPages ? 'text-Neutral-grayscale-75' : 'text-Black_Opacity-100'}`}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
        </li>

        {/* 마지막 페이지로 이동 */}
        <li>
          <button
            onClick={handleLast}
            className={`px-4 py-2 ${currentPage === totalPages ? 'text-Neutral-grayscale-75' : 'text-Black_Opacity-100'}`}
            disabled={currentPage === totalPages}
          >
            {'>>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNation;