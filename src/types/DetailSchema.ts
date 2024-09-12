import { z } from 'zod';

// Hooking 이미지 타입 정의
export const HookingImageSchema = z.object({
  imageUrl: z.string(),
  order: z.number(),
  pcImageUrl: z.string(),
});

// Hooking 타입 정의
export const HookingSchema = z.object({
  preTitle: z.string().optional(),
  title: z.string().optional(),
  tagTitle: z.string().optional(),
  content: z.string().optional(),
  order: z.number().optional(),
  templateType: z.string(),
  hookingImageList: z.array(HookingImageSchema).optional(),
});

// 설명 이미지 타입 정의
export const DescriptionImageSchema = z.object({
  imageUrl: z.string(),
  pcImageUrl: z.string(),
  order: z.number(),
});

// 해시태그 타입 정의
export const HashtagSchema = z.object({
  hashtag: z.string(),
  order: z.number(),
});

// 설명 타입 정의
export const DescriptionSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  order: z.number().optional(),
  templateType: z.string(),
  descriptionImages: z.array(DescriptionImageSchema).optional(),
  hashtags: z.array(HashtagSchema).optional(),
});

// 강사 타입 정의
export const LecturerSchema = z.object({
  name: z.string(),
  nickname: z.string(),
  career: z.string(),
  introduce: z.string(),
  profileImage: z.string(),
  templateType: z.string(),
});

// 커리큘럼 타입 정의
export const CurriculumSchema = z.object({
  order: z.string(),
  title: z.string(),
  content: z.string(),
});

// 리뷰 타입 정의
export const ReviewSchema = z.object({
  id: z.number(),
  programName: z.string(),
  grade: z.number(),
  date: z.string(),
  userName: z.string(),
  dreamWorkField: z.string(),
  year: z.number(),
  major: z.string(),
  status: z.string(),
  title: z.string(),
  content: z.string(),
});

export const ReviewsSchema = z.array(ReviewSchema);

// 추천 프로그램 타입 정의
export const RecommendedProgramSchema = z.object({
  recommendedProgramId: z.number(),
  tag: z.string(),
  title: z.string(),
  intro: z.string(),
  thumbnail: z.string(),
  recruitEndDate: z.string(),
  programStartDate: z.string(),
  programEndDate: z.string(),
});

// FAQ 타입 정의
export const FAQSchema = z.object({
  order: z.number(),
  question: z.string(),
  answer: z.string(),
});

// 메인 객체 타입 정의
export const DETAILDATASchema = z.object({
  title: z.string(),
  stepType: z.string(),
  programType: z.string(),
  recruitEndDate: z.string(),
  pcMainImageUrl: z.string(),
  mobileMainImageUrl: z.string(),
  hooking: z.array(HookingSchema),
  description: z.array(DescriptionSchema),
  lecturer: LecturerSchema,
  curriculum: z.array(CurriculumSchema),
  latestReviews: z.array(ReviewSchema),
  bestReviews: z.array(ReviewSchema),
  recommendedPrograms: z.array(RecommendedProgramSchema),
  faq: z.array(FAQSchema),
  gradeAverage: z.number(),
  passedRate: z.number(),
  gradeCount: z.number(),
});