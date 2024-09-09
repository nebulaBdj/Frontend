// Hooking 이미지 타입 정의
export interface HookingImage {
  imageUrl: string;
  order: number;
}

// Hooking 타입 정의 -> 프리 타이틀, 태그 타이틀 추가
export interface Hooking {
  preTitle?: string;
  title?: string;
  tagTitle?: string;
  content?: string;
  order?: number;
  templateType: string;
  hookingImageList?: HookingImage[];
}

// 설명 이미지 타입 정의
export interface DescriptionImage {
  imageUrl: string;
  order: number;
}

// 설명 타입 정의
export interface Description {
  title?: string;
  content?: string;
  order?: number;
  templateType: string;
  descriptionImages?: DescriptionImage[];
  hashtags?: Hashtag[];
}

// 해시태그 타입 정의
export interface Hashtag {
  hashtag: string;
  order: number;
}

// 강사 타입 정의 -> 별명 추가
export interface Lecturer {
  name: string;
  nickname: string; // 수정됨
  career: string;
  introduce: string; // 수정됨
  profileImage: string;
  templateType: string;
}

// 커리큘럼 타입 정의
export interface Curriculum {
  order: string; // 순서 두자리수로 주기
  title: string;
  content: string;
}

// 리뷰 타입 정의 -> 리뷰 작성 시간
export interface Review {
  id: number;
  programName: string;
  grade: number;
  date: string;
  userName: string;
  dreamWorkField: string;
  year: number;
  major: string;
  status: string;
  title: string;
  content: string;
}

// 추천 프로그램 타입 정의
export interface RecommendedProgram {
  recommendedProgramId: number; // 수정됨
  tag: string;
  title: string;
  intro: string;
  thumbnail: string;
  recruitEndDate: string;
  programStartDate: string;
  programEndDate: string;
}

// FAQ 타입 정의
export interface FAQ {
  order: number;
  question: string;
  answer: string;
}

// 메인 객체 타입 정의
export interface DETAILDATA {
  title: string;
  stepType: string; // tag가 없어서 대체
  programType: string;
  recruitEndDate: string;
  pcMainImageUrl: string;
  mobileMainImageUrl: string;
  hooking: Hooking[];
  description: Description[];
  lecturer: Lecturer;
  curriculum: Curriculum[];
  latestReviews: Review[];
  bestReviews: Review[];
  recommendedPrograms: RecommendedProgram[];
  faq: FAQ[];
  gradeAverage: number;
  passedRate: number;
  gradeCount: number;
}
