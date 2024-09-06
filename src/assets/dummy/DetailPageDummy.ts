import { DETAILDATA } from '../../types/ProgramDetailType';

export const DUMMY_DATA: DETAILDATA = {
  title: '이력서&자기소개서 완성 1기',
  tag: '탐색',
  recruitEndDate: '2024-09-11T17:50:36',
  pcMainImageUrl: 'url',
  mobileMainImageUrl: 'url',
  hooking: [
    {
      templateType: 'blue',
      order: 1,
      preTitle: '렛츠 커리어와 함께',
      title: '커리어의 첫 시작을 함께 해요',
    },
    {
      templateType: 'blue',
      tagTitle: 'VISION',
      content:
        '렛츠 커리어는 취업 준비생과 주니어가\n주도권을 가지고 커리어를 결정할 수 있기를 바랍니다.',
    },
    {
      templateType: 'blue',
      tagTitle: 'MISSION',
      content:
        '커리어 단계별 커리큘럼과 독자적인 컨텐츠,\n지속 가능한 커이어 네트워크와 커뮤니티를 제공합니다.',
    },
    {
      templateType: 'blue',
      tagTitle: 'CORE VALUE',
      content:
        '렛츠 커리어는 세 가지 코어 벨류를 중심으로\n취업 준비생과 주니어의 힘이 되어 줍니다.',
      hookingImageList: [
        {
          imageUrl: '/img/Hooking_img1.png',
          order: 1,
        },
        {
          imageUrl: '/img/Hooking_img2.png',
          order: 2,
        },
        {
          imageUrl: '/img/Hooking_img3.png',
          order: 3,
        },
      ],
    },
    {
      templateType: 'blue',
      preTitle: '서류 완성 2주 패키지',
      title: '이런 분들께 적극 추천해요',
      hookingImageList: [
        {
          imageUrl: '/img/Hooking_img_who_moblie.png',
          order: 1,
        },
      ],
    },
    {
      templateType: 'blue',
      preTitle: '학습부터 미션 수행까지',
      title: '온라인 대시보드를 통해\n 편하게 진행해요',
      hookingImageList: [
        {
          imageUrl: '/img/mobile_dash.png',
          order: 1,
        },
      ],
    },
  ],
  description: [
    {
      templateType: 'blue',
      order: 1,
      title: '이력서&자기소개서 완성 1기는\n이런 프로그램이에요',
      hashtags: [
        {
          order: 1,
          hashtag: '다양한 템플릿',
        },
        {
          order: 2,
          hashtag: '챌린지',
        },
        {
          order: 3,
          hashtag: '첨삭 가이드',
        },
        {
          order: 4,
          hashtag: '합격자 예시',
        },
        {
          order: 5,
          hashtag: '마스터 이력서',
        },
      ],
      descriptionImages: [
        {
          imageUrl: '/img/intro_img.png',
          order: 1,
        },
      ],
    },
  ],
  lecturer: {
    templateType: 'blue',
    name: '홍길동',
    nickName: '자기소개서 전문가',
    career: '소개소개소개소개',
    intro:
      '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
    profileImage: '/img/lecturer_img.jpg',
  },
  curriculum: [
    {
      order: '01',
      title: '경험 정리',
      content: '나만의 장단점 및 역량 키워드 도출하기, 에피소드별 경험 구조화하기 (star 기법)',
    },
    {
      order: '02',
      title: '직무 탐색',
      content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
    },
    {
      order: '03',
      title: '직무 분석',
      content: '직무별 요구 역량 및 수행 업무 분석하기',
    },
    {
      order: '04',
      title: '나만의 컨셉 잡기',
      content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
    },
    {
      order: '05',
      title: '나만의 컨셉 잡기',
      content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
    },
    {
      order: '06',
      title: '나만의 컨셉 잡기',
      content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
    },
  ],
  latestReviews: [
    {
      userName: '홍길동',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 5,
      createAt: new Date('2024-09-01T10:20:30'),
    },
    {
      userName: '이영희',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 4,
      createAt: new Date('2024-09-02T10:20:30'),
    },
    {
      userName: '김철수',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 5,
      createAt: new Date('2024-08-20T10:20:30'),
    },
  ],
  bestReviews: [
    {
      userName: '홍길동',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 5,
      createAt: new Date('2024-09-01T10:20:30'),
    },
    {
      userName: '이영희',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 4,
      createAt: new Date('2024-09-02T10:20:30'),
    },
    {
      userName: '김철수',
      content:
        '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
      grade: 5,
      createAt: new Date('2024-08-20T10:20:30'),
    },
  ],
  recommendedPrograms: [
    {
      programId: 1,
      tag: '탐색',
      title: 'CX Manager의 모든 것과\n커리어 설계',
      intro: '제너럴의 스페셜리스트, CX Manager',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-08-23',
      programStartDate: '2024-08-23',
      programEndDate: '2024-08-31',
    },
    {
      programId: 2,
      tag: '탐색',
      title: '데이터 분석 기초',
      intro: '데이터로 세상을 분석하는 방법',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-08-25',
      programStartDate: '2024-08-26',
      programEndDate: '2024-09-02',
    },
    {
      programId: 3,
      tag: '탐색',
      title: '비즈니스 모델 설계',
      intro: '창의적인 비즈니스 모델의 기초',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-08-28',
      programStartDate: '2024-08-29',
      programEndDate: '2024-09-05',
    },

    // 서류 태그 프로그램
    {
      programId: 4,
      tag: '서류',
      title: '이력서 작성의 모든 것',
      intro: 'HR 전문가가 알려주는 완벽한 이력서 작성법',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-01',
      programStartDate: '2024-09-02',
      programEndDate: '2024-09-09',
    },
    {
      programId: 5,
      tag: '서류',
      title: '자기소개서 작성 전략',
      intro: '합격을 부르는 자기소개서 작성 비법',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-03',
      programStartDate: '2024-09-04',
      programEndDate: '2024-09-10',
    },
    {
      programId: 6,
      tag: '서류',
      title: '포트폴리오 완성하기',
      intro: '나만의 포트폴리오로 승부하기',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-05',
      programStartDate: '2024-09-06',
      programEndDate: '2024-09-12',
    },

    // 면접 태그 프로그램
    {
      programId: 7,
      tag: '면접',
      title: '면접 대비 전략',
      intro: '합격을 부르는 면접 스킬',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-08',
      programStartDate: '2024-09-09',
      programEndDate: '2024-09-16',
    },
    {
      programId: 8,
      tag: '면접',
      title: '모의 면접 훈련',
      intro: '실전처럼 준비하는 모의 면접',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-10',
      programStartDate: '2024-09-11',
      programEndDate: '2024-09-18',
    },
    {
      programId: 9,
      tag: '면접',
      title: '면접 피드백 워크샵',
      intro: '전문가와 함께하는 면접 피드백',
      thumbnail: '/svg/challange_listpage_thumbnail.svg',
      recruitEndDate: '2024-09-12',
      programStartDate: '2024-09-13',
      programEndDate: '2024-09-20',
    },
  ],
  faq: [
    {
      order: 1,
      question: '공채를 준비하고 있는데 참여해도 되나요?',
      answer:
        '그럼요. 해당 프로그램은 인턴/신입/공채/공기업 상관 없이 이력서와 자기소개서를 필요로 한다면 모두 도움을 받을 수 있습니다.',
    },
    {
      order: 2,
      question: '프로그램 수강 기간 동안 학습 자료는 제공되나요?',
      answer:
        '네, 프로그램 수강 기간 동안 모든 학습 자료는 온라인으로 제공되며, 필요시 다운로드할 수 있습니다.',
    },
    {
      order: 3,
      question: '결제 후 환불이 가능한가요?',
      answer:
        '결제 후 7일 이내에는 전액 환불이 가능합니다. 단, 수업이 시작된 이후에는 환불이 불가능할 수 있습니다.',
    },
    {
      order: 4,
      question: '프로그램 수강에 필요한 사전 지식이 있나요?',
      answer:
        '기본적인 컴퓨터 사용 능력 외에 특별한 사전 지식은 필요하지 않습니다. 초보자도 쉽게 따라올 수 있도록 커리큘럼이 구성되어 있습니다.',
    },
  ],
};
