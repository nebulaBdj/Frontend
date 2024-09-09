// import { RecruitState } from '../../components/Filters/RecruitTags';
// import { DETAILDATA } from '../../types/ProgramDetailType';

// export const DATA_FOR_FIXESBTN = {
//   id: 1,
//   title: '이력서&자기소개서 완성 1기',
//   intro: '제너럴의 스페셜리스트, CX Manager',
//   dday: 4, // 실제 D-day 값을 계산해서 넣어야 합니다.
//   program_start_date: '2024-08-23',
//   program_finish_date: '2024-08-31',
//   imageUrl: '/img/cxmanager.png',
//   status: RecruitState.RECRUITING, // 채용 상태를 반영
//   career_type: 'CAREER_EXPLORE', // 직무 탐색 단계
//   program_type: 'CHALLENGE', // 챌린지 프로그램
// };

// export const DUMMY_DATA: DETAILDATA = {
//   title: '이력서&자기소개서 완성 1기',
//   stepType: '탐색',
//   recruitEndDate: '2024-09-11T17:50:36',
//   pcMainImageUrl: 'url',
//   mobileMainImageUrl: 'url',
//   hooking: [
//     {
//       templateType: 'blue',
//       order: 1,
//       preTitle: '렛츠 커리어와 함께',
//       title: '커리어의 첫 시작을 함께 해요',
//     },
//     {
//       templateType: 'blue',
//       tagTitle: 'VISION',
//       content:
//         '렛츠 커리어는 취업 준비생과 주니어가\n주도권을 가지고 커리어를 결정할 수 있기를 바랍니다.',
//     },
//     {
//       templateType: 'blue',
//       tagTitle: 'MISSION',
//       content:
//         '커리어 단계별 커리큘럼과 독자적인 컨텐츠,\n지속 가능한 커이어 네트워크와 커뮤니티를 제공합니다.',
//     },
//     {
//       templateType: 'blue',
//       tagTitle: 'CORE VALUE',
//       content:
//         '렛츠 커리어는 세 가지 코어 벨류를 중심으로\n취업 준비생과 주니어의 힘이 되어 줍니다.',
//       hookingImageList: [
//         {
//           imageUrl: '/img/Hooking_img1.png',
//           order: 1,
//         },
//         {
//           imageUrl: '/img/Hooking_img2.png',
//           order: 2,
//         },
//         {
//           imageUrl: '/img/Hooking_img3.png',
//           order: 3,
//         },
//       ],
//     },
//     {
//       templateType: 'blue',
//       preTitle: '서류 완성 2주 패키지',
//       title: '이런 분들께 적극 추천해요',
//       hookingImageList: [
//         {
//           imageUrl: '/img/Hooking_img_who_moblie.png',
//           order: 1,
//         },
//       ],
//     },
//     {
//       templateType: 'blue',
//       preTitle: '학습부터 미션 수행까지',
//       title: '온라인 대시보드를 통해\n 편하게 진행해요',
//       hookingImageList: [
//         {
//           imageUrl: '/img/mobile_dash.png',
//           order: 1,
//         },
//       ],
//     },
//   ],
//   description: [
//     {
//       templateType: 'blue',
//       order: 1,
//       title: '이력서&자기소개서 완성 1기는\n이런 프로그램이에요',
//       hashtags: [
//         {
//           order: 1,
//           hashtag: '다양한 템플릿',
//         },
//         {
//           order: 2,
//           hashtag: '챌린지',
//         },
//         {
//           order: 3,
//           hashtag: '첨삭 가이드',
//         },
//         {
//           order: 4,
//           hashtag: '합격자 예시',
//         },
//         {
//           order: 5,
//           hashtag: '마스터 이력서',
//         },
//       ],
//       descriptionImages: [
//         {
//           imageUrl: '/img/intro_img.png',
//           order: 1,
//         },
//       ],
//     },
//   ],
//   lecturer: {
//     templateType: 'blue',
//     name: '홍길동',
//     nickname: '자기소개서 전문가',
//     career: `
//       前 S 기업 인사팀 서류 심사 담당
//       前 B 글로벌 기업 인사관리팀 팀장
//       現 『합격을 부르는 자기소개서』 저자
//     `,
//     introduce:
//       '안녕하세요, 자기소개서 및 이력서 전문가 홍길동입니다.\n저는 10년 이상의 경력을 통해 수백 건의 서류를 심사하고\n컨설팅해왔습니다. 이번 프로그램에서는 여러분이 자신의\n강점을 돋보이게 할 수 있도록 실질적인 팁과 노하우를\n제공해드리겠습니다.',
//     profileImage: '/img/lecturer_img.jpg',
//   },
//   curriculum: [
//     {
//       order: '01',
//       title: '경험 정리',
//       content: '나만의 장단점 및 역량 키워드 도출하기, 에피소드별 경험 구조화하기 (star 기법)',
//     },
//     {
//       order: '02',
//       title: '직무 탐색',
//       content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
//     },
//     {
//       order: '03',
//       title: '직무 분석',
//       content: '직무별 요구 역량 및 수행 업무 분석하기',
//     },
//     {
//       order: '04',
//       title: '나만의 컨셉 잡기',
//       content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
//     },
//     {
//       order: '05',
//       title: '나만의 컨셉 잡기',
//       content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
//     },
//     {
//       order: '06',
//       title: '나만의 컨셉 잡기',
//       content: '현직자 인터뷰 기반 직무 탐색하기, 관심 직무 선정하기',
//     },
//   ],
//   latestReviews: [
//     {
//       userName: '김기현',
//       content:
//         '이 프로그램은 자기소개서를 완성하는 데 정말 큰 도움이 되었습니다. 다양한 템플릿과 상세한 가이드 덕분에 나만의 이야기를 체계적으로 정리할 수 있었고, 실제 합격자 예시도 참고하면서 많은 인사이트를 얻었습니다. 첨삭 가이드도 매우 유익했습니다. 정말 만족스러운 경험이었습니다.',
//       grade: 5,
//       date: '2024-09-02',
//       dreamWorkField: 'IT',
//       id: 1,
//       major: '컴퓨터공학',
//       programName: '자기소개서 완성 1기',
//       status: 'EMPLOYED',
//       title: '자기소개서 완성에 큰 도움이 됐어요!',
//       year: 3,
//     },
//     {
//       userName: '김첨지',
//       content:
//         '처음에는 자기소개서 작성이 막막했지만, 이 프로그램을 통해 나만의 스토리를 어떻게 풀어나가야 할지 알게 되었습니다. 강의 내용이 체계적이고 실전에서 바로 적용할 수 있도록 구성되어 있어서 매우 유익했습니다. 다만, 시간이 조금 더 넉넉했으면 좋았을 것 같습니다.',
//       grade: 4,
//       date: '2024-09-02',
//       dreamWorkField: 'IT',
//       id: 2,
//       major: '경영학',
//       programName: '자기소개서 완성 2기',
//       status: 'EMPLOYED',
//       title: '스토리 작성에 큰 도움이 되었어요',
//       year: 4,
//     },
//     {
//       userName: '정옥순',
//       content:
//         '프로그램의 내용 자체는 유익했지만, 제 기대보다는 조금 아쉬웠습니다. 다양한 템플릿과 실전 예시는 좋았지만, 제 자신만의 이야기를 더 잘 풀어낼 수 있는 구체적인 예시가 조금 부족하다고 느꼈습니다. 강사의 피드백은 실질적이었지만, 시간이 더 길었으면 더 많은 피드백을 받을 수 있었을 것 같습니다.',
//       grade: 3,
//       date: '2024-08-20',
//       dreamWorkField: '교육',
//       id: 3,
//       major: '영어교육',
//       programName: '자기소개서 완성 3기',
//       status: 'EMPLOYED',
//       title: '유익했지만 아쉬운 부분도 있었습니다.',
//       year: 2,
//     },
//   ],
//   bestReviews: [
//     {
//       userName: '홍길동',
//       content:
//         '이력서와 자기소개서를 어떻게 써야 할지 막막했는데, 이 챌린지를 통해 체계적으로 정리할 수 있었습니다. 특히, 다양한 템플릿과 첨삭 가이드를 통해 서류를 훨씬 더 매력적으로 만들 수 있었어요. 합격자 예시도 큰 도움이 되었습니다. 마스터 이력서 챌린지를 통해 자신감을 얻게 되어 정말 만족합니다.',
//       grade: 5,
//       date: '2024-09-01',
//       dreamWorkField: '마케팅',
//       id: 4,
//       major: '광고홍보학',
//       programName: '이력서&자기소개서 완성 1기',
//       status: 'EMPLOYED',
//       title: '이력서 작성에 자신감을 얻었어요!',
//       year: 3,
//     },
//     {
//       userName: '이영희',
//       content:
//         '저는 자기소개서를 작성하는 데 큰 어려움을 느끼던 중, 이 프로그램을 통해 체계적으로 자기소개서를 작성할 수 있었습니다. 특히, 직무 탐색과 직무 분석 단계에서 많은 통찰을 얻었고, 현직자 인터뷰 기반 자료들이 매우 유익했어요. 커리어의 첫걸음을 내딛는 분들에게 강력히 추천합니다.',
//       grade: 5,
//       date: '2024-09-02',
//       dreamWorkField: 'HR',
//       id: 5,
//       major: '심리학',
//       programName: '자기소개서 완성 1기',
//       status: 'EMPLOYED',
//       title: '자기소개서 작성에 큰 도움을 받았습니다!',
//       year: 4,
//     },
//     {
//       userName: '김철수',
//       content:
//         '나만의 경험을 어떻게 정리해야 할지 몰라서 고민했는데, 이력서&자기소개서 완성 1기 챌린지를 통해 나만의 역량을 잘 정리할 수 있었습니다. 직무 탐색부터 컨셉 잡기까지, 모든 과정이 명확하게 설명되어 있어서 따라가기 쉬웠어요. 덕분에 취업 준비가 훨씬 수월해졌습니다.',
//       grade: 5,
//       date: '2024-08-20',
//       dreamWorkField: 'IT',
//       id: 6,
//       major: '컴퓨터공학',
//       programName: '이력서&자기소개서 완성 1기',
//       status: 'EMPLOYED',
//       title: '경험 정리에 큰 도움이 되었습니다!',
//       year: 3,
//     },
//   ],
//   recommendedPrograms: [
//     {
//       recommendedProgramId: 1,
//       tag: '탐색',
//       title: 'CX Manager의 모든 것과\n커리어 설계',
//       intro: '제너럴의 스페셜리스트, CX Manager',
//       thumbnail: '/img/cxmanager.png',
//       recruitEndDate: '2024-09-09',
//       programStartDate: '2024-09-10',
//       programEndDate: '2024-09-10',
//     },
//     {
//       recommendedProgramId: 2,
//       tag: '탐색',
//       title: '무신사 백엔드 개발자의\n커리어패스',
//       intro: '연봉 5천의 백엔드 개발자에게 듣는 커리어 이야기',
//       thumbnail: '/img/back.png',
//       recruitEndDate: '2024-09-23',
//       programStartDate: '2024-09-24',
//       programEndDate: '2024-09-24',
//     },
//     {
//       recommendedProgramId: 3,
//       tag: '탐색',
//       title: '배민 PM이 재정의한\nPM 취업 준비',
//       intro: '배민 PM에게 배우는 PM 취업 준비 A to Z',
//       thumbnail: '/svg/challange_listpage_thumbnail.svg',
//       recruitEndDate: '2024-08-22',
//       programStartDate: '2024-08-23',
//       programEndDate: '2024-08-23',
//     },

//     // 서류 태그 프로그램
//     {
//       recommendedProgramId: 4,
//       tag: '서류',
//       title: '네카라쿠배 서비스 기획,\n운영 인턴 취업의 모든 것',
//       intro: '카카오 인턴과 함께 나누는\n합격 비결',
//       thumbnail: '/img/intern.png',
//       recruitEndDate: '2024-08-22',
//       programStartDate: '2024-08-23',
//       programEndDate: '2024-09-06',
//     },
//     {
//       recommendedProgramId: 5,
//       tag: '서류',
//       title: '자기소개서 작성 전략',
//       intro: '합격을 부르는 자기소개서 작성 비법',
//       thumbnail: '/svg/challange_listpage_thumbnail.svg',
//       recruitEndDate: '2024-09-08',
//       programStartDate: '2024-09-09',
//       programEndDate: '2024-09-19',
//     },
//     {
//       recommendedProgramId: 6,
//       tag: '서류',
//       title: '포트폴리오 완성 2주 패키지 2기',
//       intro: '하루 30분, 합격하는 서류 완성 2주 패키지',
//       thumbnail: '/img/ptpol.png',
//       recruitEndDate: '2024-09-10',
//       programStartDate: '2024-09-11',
//       programEndDate: '2024-09-25',
//     },

//     // 면접 태그 프로그램
//     {
//       recommendedProgramId: 7,
//       tag: '면접',
//       title: '프론트엔드 면접의 정석',
//       intro: '합격을 부르는 기술 면접의 새로운 혁신',
//       thumbnail: '/img/frontEnd.png',
//       recruitEndDate: '2024-09-03',
//       programStartDate: '2024-09-04',
//       programEndDate: '2024-09-04',
//     },
//     {
//       recommendedProgramId: 8,
//       tag: '면접',
//       title: '면접왕 큐형의 빈틈없는\n면접 준비 방법',
//       intro: '합격률 20%의 기적, 5시간\n안에 가르쳐드립니다.',
//       thumbnail: '/img/interview_kin.png',
//       recruitEndDate: '2024-09-10',
//       programStartDate: '2024-09-13',
//       programEndDate: '2024-09-13',
//     },
//     {
//       recommendedProgramId: 9,
//       tag: '면접',
//       title: '면접 피드백 워크샵',
//       intro: '전문가와 함께하는 면접 피드백',
//       thumbnail: '/img/interview_king.png',
//       recruitEndDate: '2024-09-12',
//       programStartDate: '2024-09-13',
//       programEndDate: '2024-09-20',
//     },
//   ],
//   faq: [
//     {
//       order: 1,
//       question: '공채를 준비하고 있는데 참여해도 되나요?',
//       answer:
//         '그럼요. 해당 프로그램은 인턴/신입/공채/공기업 상관 없이 이력서와 자기소개서를 필요로 한다면 모두 도움을 받을 수 있습니다.',
//     },
//     {
//       order: 2,
//       question: '프로그램 수강 기간 동안 학습 자료는 제공되나요?',
//       answer:
//         '네, 프로그램 수강 기간 동안 모든 학습 자료는 온라인으로 제공되며, 필요시 다운로드할 수 있습니다.',
//     },
//     {
//       order: 3,
//       question: '결제 후 환불이 가능한가요?',
//       answer:
//         '결제 후 7일 이내에는 전액 환불이 가능합니다. 단, 수업이 시작된 이후에는 환불이 불가능할 수 있습니다.',
//     },
//     {
//       order: 4,
//       question: '프로그램 수강에 필요한 사전 지식이 있나요?',
//       answer:
//         '기본적인 컴퓨터 사용 능력 외에 특별한 사전 지식은 필요하지 않습니다. 초보자도 쉽게 따라올 수 있도록 커리큘럼이 구성되어 있습니다.',
//     },
//   ],
// };
