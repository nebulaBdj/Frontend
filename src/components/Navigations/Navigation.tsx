import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Lets, LetsDesk, Career, Logined, Hamburger as HamburgerIcon, Xclose, } from '../../assets/svg';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Lets className="w-7 h-7" />
      <Career className="w-16 h-7 ml-1" />
    </div>
  );
};

const LogoDesk: React.FC = () => {
  return (
    <div className="flex items-center">
      <LetsDesk className="w-9 h-9" />
      <Career className="w-20 h-9 ml-1" />
    </div>
  );
};

const Navigation: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <nav className="h-[60px] fixed top-0 left-0 w-full bg-white border-b-[1px] z-50 flex justify-between px-5 py-3 mx-auto md:h-[70px]">
        <div className="flex items-center justify-between w-full md:mx-auto lg:w-[1200px]">
          <div
            className=" md:hidden "
            onClick={() => {
              navigate('/listpage');
            }}
          >
            <Logo />
          </div>
          <div className="hidden md:flex items-center font-pretendard font-semibold text-neut-60">
            <div
              onClick={() => {
                navigate('/listpage');
              }}
            >
              <LogoDesk />
            </div>
            <Link to="/listPage" className="ml-9">
              렛츠커리어 스토리
            </Link>
            <Link to="/listPage" className="ml-9">
              프로그램
            </Link>
            <Link to="/listPage" className="ml-9">
              블로그
            </Link>
          </div>

          <div className="flex">
            <div className="hidden md:flex">
              <span className="grid place-items-center font-pretendard font-medium">김렛츠 님</span>
              <Logined className="w-7 h-7 ml-2" />
            </div>
            <button onClick={toggleMenu} className="ml-4">
              {menuToggle ? <Xclose className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
            </button>
          </div>
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
                  <div className="text-[#4d55f5] text-base font-medium font-['Pretendard Variable'] leading-normal pr-6">
                    로그인
                  </div>
                  <div className="text-[#27272d] text-base font-medium font-['Pretendard Variable'] leading-normal">
                    회원가입
                  </div>
                </div>
              </div>
              <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
                    마이페이지
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#e7e7e7]" />
              <div className="self-stretch flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
                      렛츠커리어 스토리
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    {/* 라우팅 수정 필요 */}
                    <div
                      className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed"
                      onClick={() => {
                        setMenuToggle(!menuToggle);
                        navigate('/listpage');
                      }}
                    >
                      프로그램
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
                      블로그
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-[#e7e7e7]" />
              <div className="self-stretch flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
                      공지사항
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-2.5 py-3 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#27272d] text-lg font-bold font-['Pretendard Variable'] leading-relaxed">
                      자주 묻는 질문
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
