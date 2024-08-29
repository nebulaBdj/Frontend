import React from 'react'
import { Lets, Career, Insta, Blog } from '../../assets/svg'
import { MenuItem, BusinessInfo } from '../../types/types';


const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Lets className="w-7 h-7" />
      <Career className="w-16 h-7 ml-2" />
    </div>
  );
};

const menu1: MenuItem[] = [
  { name: '렛츠커리어 스토리', address: '' },
  { name: '프로그램', address: '/program' },
  { name: '블로그', address: '' }
];

const menu2: MenuItem[] = [
  { name: '공지사항', address: '' },
  { name: '자주 묻는 질문', address: '' },
  {
    name: '고객센터', address: '',
    content: `1:1 채팅 상담: 우측 하단 [문의하기] 클릭\n- 평일 및 주말 09:00-21:00 상담 가능\n전화 상담: 채팅 상담을 통해 신청 가능\n이메일 상담: official@letscareer.co.kr`
  }
];

const BusinessInformation: BusinessInfo[] = [
  {
    companyName: '아이앤지 사업자 정보',
    representative: '대표자: 송다예',
    businessNumber: '사업자등록번호: 871-11-02629',
    businessNumber2: '통신판매업신고번호 제 2024-서울마포-2221호',
    address: '주소: 서울특별시 마포구 독막로 9길 18, 서홍빌딩 3층 A9호',
    email: '이메일: official@letscareer.co.kr',
    phone: '고객센터: 0507-0178-8541',
    etc: 'Copyright© 2024 아이앤지. All rights reserved'
  }
]

const BusinessInformationComponent: React.FC<{ info: BusinessInfo[] }> = ({ info }) => {
  return (
    <div className="business-info-container">
      {info.map((infoItem, index) => (
        <div key={index} className="business-info-item">
          <h2>{infoItem.companyName}</h2>
          <p>{infoItem.representative}</p>
          <p>{infoItem.businessNumber}</p>
          <p>{infoItem.businessNumber2}</p>
          <p>{infoItem.address}</p>
          <p>{infoItem.email}</p>
          <p>{infoItem.phone}</p>
          <p>{infoItem.etc}</p>
        </div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className='footer_wrapper bg-neut-75 w-full'>
      <div className="flex flex-col justify-between h-full">

        <div>
          {menu1.map((item: MenuItem, index: number) => (
            <div key={index}>
              <h2>{item.name}</h2>
              {item.content && (
                <p>
                  {item.content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className='my-12' />


        <div>
          {menu2.map((item: MenuItem, index: number) => (
            <div key={index}>
              <h2>{item.name}</h2>
              {item.name === '고객센터' && item.content && (
                <p className='text-neutral-900 text-opacity-60'>
                  {item.content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
              {item.name !== '고객센터' && item.content && (
                <p>
                  {item.content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className='my-12' />

        <Logo />

        <div className='my-5' />

        <div className='text-neutral-900 text-opacity-20 h-4'>
          <BusinessInformationComponent info={BusinessInformation} />
        </div>

        <div className='flex justify-between items-center mt-4'>
          {/* Flex container for alignment */}
          <div className='flex items-center space-x-4'>
            {/* Left aligned icons with links */}
            <a href='https://www.instagram.com/letscareer.official/' target='_blank' rel='noopener noreferrer'>
              <Insta className='w-6 h-6' />
            </a>
            <a href='https://blog.naver.com/PostList.naver?blogId=letsintern' target='_blank' rel='noopener noreferrer'>
              <Blog className='w-6 h-6' />
            </a>
          </div>
          <div className='flex space-x-4'>
            {/* Right aligned text */}
            <div className='w-[74px] h-4 text-right'>서비스 이용약관</div>
            <div className='w-[74px] h-4 text-right'>개인정보처리방침</div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
