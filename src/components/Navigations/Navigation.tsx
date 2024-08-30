import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Lets, Career, Hamburger as HamburgerIcon, Xclose } from '../../assets/svg';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Lets className="w-7 h-7" />
      <Career className="w-16 h-7 ml-2" />
    </div>
  );
};

const Navigation: React.FC = () => {
  // 반응형 pc 미구현
  const [activeItem, setActiveItem] = useState<string>("마이페이지");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <nav className="bg-gray-100 navigation_wrapper fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-5 py-3 md:py-0 md:px-8 max-w-screen-md mx-auto">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <button onClick={toggleMenu} className="ml-auto">
            {menuToggle ? (
              <Xclose className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>

        </div>
      </nav>

      {/* 메뉴 토글에 따라 메뉴 표시 */}
      {menuToggle && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-start">
          {/* 메뉴 아이템 */}
          <div className="mt-16 w-full h-full flex flex-col items-center justify-start">
            <div className="w-full h-full px-5 py-10 flex flex-col justify-start items-center gap-5">
              <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="h-6 justify-between items-center flex">
                  <div className="text-[#4d55f5] text-base font-medium font-['Pretendard Variable'] leading-normal pr-6">로그인</div>
                  <div className="text-[#27272d] text-base font-medium font-['Pretendard Variable'] leading-normal">회원가입</div>
                </div>
              </div>
              <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">마이페이지</div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#e7e7e7]" />
              <div className="self-stretch flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">렛츠커리어 스토리</div>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    {/* 라우팅 수정 필요 */}
                    <Link to="https://www.letscareer.co.kr/program" className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">프로그램</Link>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">블로그</div>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#e7e7e7]" />
              <div className="self-stretch flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">공지사항</div>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">자주 묻는 질문</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;

