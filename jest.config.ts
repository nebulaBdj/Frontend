export default {
  preset: "ts-jest", // TypeScript 및 ts-jest 프리셋 설정
  testEnvironment: "jsdom", // 브라우저 환경에서 테스트 실행
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.app.json", // ts-jest의 tsconfig 파일 경로 지정
      },
    ],
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer", // SVG 파일을 위한 모듈 변환
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // CSS 모듈을 위한 모듈 변환
    "^@/(.*)$": "<rootDir>/src/$1", // 절대 경로 별칭 설정 (필요한 경우)
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // 테스트 환경 설정 파일
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // 테스트에서 지원할 파일 확장자
};
