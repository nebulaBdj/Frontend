import React from 'react';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="border-t w-full border-neutral-800 bg-neutral-200 px-5 pb-6 pt-10 lg:px-10 xl:px-52">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl mx-auto">
        {/* 왼쪽 섹션: 로고와 사업자 정보 */}
        <div className="flex flex-col gap-5 lg:w-1/3">
          <div className="flex items-center gap-2">
            <img className="w-[34px]" alt="Logo" src="https://via.placeholder.com/34" />
            <img className="w-[79px]" alt="Career" src="https://via.placeholder.com/79x35" />
          </div>
          <div className="text-neutral-800 text-xs">
            <span>아이앤지 사업자 정보</span>
            <span>대표자: 송다예 | 사업자등록번호: 871-11-02629</span>
          </div>
        </div>

        {/* 오른쪽 섹션: 사이트맵과 고객센터 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:w-2/3">
          <div className="flex flex-col gap-3">
            <a className="text-sm font-medium" href="/about">렛츠커리어 스토리</a>
            <a className="text-sm font-medium" href="/program">프로그램</a>
            <a className="text-sm font-medium" href="/blog/list">블로그</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-sm font-medium" href="https://letscareer.oopy.io" target="_blank" rel="noopener noreferrer">공지사항</a>
            <a className="text-sm font-medium" href="https://docs.google.com/forms/d/e/1FAIpQLSeHM_d3yd0cOiH2aSqhprtSFmidIYFziyIxf5-9j7rgZCobvA/viewform" target="_blank" rel="noopener noreferrer">광고/제휴 문의</a>
            <a className="text-sm font-medium" href="https://letscareer.oopy.io" target="_blank" rel="noopener noreferrer">자주 묻는 질문</a>
            <div className="text-xs text-neutral-800">
              <p>1:1 채팅 상담: 우측 하단 [문의하기] 클릭</p>
              <p>- 평일 및 주말 09:00-21:00 상담 가능</p>
              <p>전화 상담: 채팅 상담을 통해 신청 가능</p>
              <p>이메일 상담: official@letscareer.co.kr</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
