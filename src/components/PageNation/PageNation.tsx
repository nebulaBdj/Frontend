import React from "react";

interface PageNationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number; // 사용자가 선택한 페이지
  // 사용자가 페이지 번호를 클릭했을 때 호출되는 함수, 선택된 페이지 번호를 인자로 받음, 해당 페이지로 데이터를 변경
  getCurrentPage: (pageNumber: number) => void;
}

const PageNation: React.FC<PageNationProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  getCurrentPage,
}) => {
  const pageNumbers: number[] = []; // 배열을 생성한 후, 반복문을 사용하여 배열의 각 요소(페이지 번호)를 렌더링

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 이전 페이지로 이동
  const handlePrevious = () => {
    if (currentPage > 1) {
      getCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    if (currentPage < totalPages) {
      getCurrentPage(currentPage + 1);
    }
  };

  // 맨 첫 페이지로 이동
  const handleFirst = () => {
    getCurrentPage(1);
  };

  // 맨 마지막 페이지로 이동
  const handleLast = () => {
    getCurrentPage(totalPages);
  };

  // 선택된 페이지 강조, 페이지 범위 표시 (필요에 따라 조정 가능)
  const pageRange = pageNumbers.slice(
    Math.max(0, currentPage - 3),
    Math.min(totalPages, currentPage + 2)
  );

  return (
    <nav className="flex justify-center mt-8 mb-[100px]">
      <ul className="inline-flex overflow-hidden">
        {/* 맨 첫 페이지로 이동 */}
        <li>
          <button
            onClick={handleFirst}
            className={`px-4 py-2 ${currentPage === 1 ? "text-Neutral-grayscale-75" : "text-Black_Opacity-100"}`}
            disabled={currentPage === 1} // 첫 페이지에서는 비활성화
          >
            {"<<"}
          </button>
        </li>

        {/* 이전 페이지 버튼 */}
        <li>
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 ${currentPage === 1 ? "text-Neutral-grayscale-75" : "text-Black_Opacity-100"}`}
            disabled={currentPage === 1} // 첫 페이지에서는 비활성화
          >
            {"<"}
          </button>
        </li>

        {/* 페이지 번호 버튼 */}
        {pageRange.map((number) => (
          <li key={number}>
            <button
              onClick={() => getCurrentPage(number)}
              className={`px-4 py-2 ${currentPage === number ? "bg-Primary-100 text-white rounded-full" : "text-Black_Opacity-100"}`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* 다음 페이지 버튼 */}
        <li>
          <button
            onClick={handleNext}
            className={`px-4 py-2 ${currentPage === totalPages ? "text-Neutral-grayscale-75" : "text-Black_Opacity-100"}`}
            disabled={currentPage === totalPages} // 마지막 페이지에서는 비활성화
          >
            {">"}
          </button>
        </li>

        {/* 맨 마지막 페이지로 이동 */}
        <li>
          <button
            onClick={handleLast}
            className={`px-4 py-2 ${currentPage === totalPages ? "text-Neutral-grayscale-75" : "text-Black_Opacity-100"}`}
            disabled={currentPage === totalPages} // 마지막 페이지에서는 비활성화
          >
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNation;
