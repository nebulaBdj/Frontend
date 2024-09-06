import React from "react";

// limit: 모바일-4개, 웹-8개
// page라는 state. 현재 페이지의 번호를 의미한다.
// offset이라는 변수. 첫 게시물의 인덱스를 의미한다.
// const offset = (page - 1) * limit;

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

  // 총 페이지 수 계산
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

  // 선택된 페이지 강조, 페이지 범위 표시 (필요에 따라 조정 가능)
  const pageRange = pageNumbers.slice(
    Math.max(0, currentPage - 3),
    Math.min(totalPages, currentPage + 2)
  );

  // return (
  //   <nav className="flex justify-center mt-8">
  //     <ul className="inline-flex -space-x-px">
  //       {pageNumbers.map(number => (
  //         <li key={number}>
  //           <button
  //             onClick={() => getCurrentPage(number)}
  //             className="px-4 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
  //           >
  //             {number}
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );

  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex -space-x-px">
        {/* 이전 페이지 버튼, 현재 페이지가 1보다 크면 이전 페이지로 이동 */}
        <li>
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 border border-gray-300 ${currentPage === 1 ? "text-gray-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
            disabled={currentPage === 1} // 첫 페이지에서는 비활성화
          >
            이전
          </button>
        </li>

        {/* 페이지 범위 제한 */}
        {pageRange.map((number) => (
          <li key={number}>
            <button
              onClick={() => getCurrentPage(number)}
              className={`px-4 py-2 border ${currentPage === number ? "bg-blue-500 text-white" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* 다음 페이지 버튼, 현재 페이지가 마지막 페이지보다 작으면 다음 페이지로 이동 */}
        <li>
          <button
            onClick={handleNext}
            className={`px-4 py-2 border border-gray-300 ${currentPage === totalPages ? "text-gray-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}`}
            disabled={currentPage === totalPages} // 마지막 페이지에서는 비활성화
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNation;
