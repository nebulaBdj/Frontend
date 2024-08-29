import React from 'react'
import { useState } from "react";
// import { withRouter } from "react-router-dom";
import { Lets, Career, Hamburger as HamburgerIcon, Xclose } from '../../assets/svg'
import { MenuItem } from '../../types/types';


const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Lets className="w-7 h-7" />
      <Career className="w-16 h-7 ml-2" />
    </div>
  );
};

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("마이페이지");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const login = [
    { name: '로그인' },
    { name: '회원가입' }
  ]
  const menu: MenuItem[] = [
    { name: '마이페이지', address: '' },
    { name: '렛츠커리어 스토리', address: '' },
    { name: '프로그램', address: '/program' },
    { name: '블로그', address: '' },
    { name: '공지사항', address: '' },
    { name: '자주 묻는 질문', address: '' }
  ];

  return (
    <>
      <nav className="bg-gray-100 navigation_wrapper fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-5 py-3 md:py-0 md:px-8 max-w-screen-md mx-auto">
        <Logo />
        {/* Hamburger Icon */}
        {/* <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]"> */}
        <div className="inline-flex items-center justify-end gap-2.5">
          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className="Hamburger relative w-8 h-8"
            aria-label="Toggle menu"
          >
            {menuToggle ? (
              <Xclose className="absolute w-5 h-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) : (
              <HamburgerIcon className="absolute w-5 h-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴의 조건부 렌더링 */}
        {menuToggle && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 ">
            <ul className="flex flex-col p-4">
              {menu.map((item, index) => (
                <li key={index} className="py-2 border-b border-gray-200">
                  <a href={item.address} className="text-black">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}


      </nav >


    </>
  )
}


export default Navigation