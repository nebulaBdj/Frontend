export interface Review {
  id: number;
  number_of_star: number;
  program_name: string;
  review_date: string;
  user_name: string;
  dream_work_field: string;
  year: number;
  major: string;
  status: string;
  contents: string;
}

export const dummyData_review: Review[] = [
  {
    id: 1,
    number_of_star: 5,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.01.01',
    user_name: '홍길동',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '프로그램을 통해 저만의 강점을 구체화할 수 있었습니다. 다양한 템플릿과 실전 예시가 제공되었고, 현직자의 피드백 덕분에 제 서류가 훨씬 경쟁력 있게 다듬어졌어요.',
  },
  {
    id: 2,
    number_of_star: 3,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.02.01',
    user_name: '김첨지',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '프로그램의 내용은 유익했지만, 제가 기대했던 것보다는 조금 아쉬웠어요. 좀 더 구체적인 예시와 추가적인 피드백이 있었다면 더 좋았을 것 같습니다.',
  },
  {
    id: 3,
    number_of_star: 4,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.05.20',
    user_name: '정옥순',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '자기소개서 작성이 어렵다고만 느꼈던 저에게 큰 도움을 준 프로그램입니다. 다양한 템플릿과 실전 예시 덕분에 나만의 강점을 명확히 어필할 수 있었고, 강사의 피드백이 굉장히 실질적이어서 많은 도움이 되었습니다. 추천합니다!',
  },
  {
    id: 4,
    number_of_star: 2,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.08.11',
    user_name: '김철수',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '불합격',
    contents:
      '프로그램이 저에게는 맞지 않았던 것 같습니다. 서류 작성에 대한 기대가 높았지만, 제 기대를 충족하지 못했어요. 좀 더 맞춤형 피드백이 있었으면 좋았을 것 같아요.',
  },
  {
    id: 5,
    number_of_star: 5,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.09.01',
    user_name: '이영희',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '현직자의 구체적인 피드백 덕분에 제 서류가 한 단계 업그레이드되었습니다. 다양한 예시와 실제 합격자 서류를 참고하면서 많이 배울 수 있었고, 서류 작성에 대한 자신감을 얻게 되었습니다.',
  },
  {
    id: 6,
    number_of_star: 4,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.12.01',
    user_name: '홍길동',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '이 프로그램을 통해 이력서와 자기소개서에 대해 전반적인 개념을 확실히 다질 수 있었습니다. 다만 조금 더 구체적인 케이스 스터디가 추가되면 좋겠다는 생각이 들었습니다.',
  },
  {
    id: 7,
    number_of_star: 5,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.12.01',
    user_name: '김기현',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '합격',
    contents:
      '이력서와 자기소개서 작성의 어려움에서 벗어날 수 있었던 유익한 프로그램이었습니다. 서류 작성의 기본부터 심화 내용까지 잘 짜여져 있어서 매우 만족스러웠습니다. 덕분에 자신감도 생겼습니다.',
  },
  {
    id: 8,
    number_of_star: 3,
    program_name: '이력서&자기소개서 완성 1기',
    review_date: '24.12.01',
    user_name: '김첨지',
    dream_work_field: 'IT',
    year: 4,
    major: '디자인 전공',
    status: '불합격',
    contents:
      '내용 자체는 좋았지만, 개인적으로 시간이 부족했던 것 같습니다. 서류 작성에서 더 많은 피드백을 받고 싶었는데, 일정이 촉박해 충분한 피드백을 받지 못한 점이 아쉬웠습니다.',
  },
];
