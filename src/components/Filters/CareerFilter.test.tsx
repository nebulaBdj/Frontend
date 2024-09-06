// // __tests__/CareerFilter.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import CareerFilter from './CareerFilter';

// describe('CareerFilter Component', () => {
//   test('renders all filter buttons', () => {
//     render(<CareerFilter />);

//     // Check if all buttons are rendered
//     expect(screen.getByText(/All/)).toBeInTheDocument();
//     expect(screen.getByText(/STEP 1\n커리어 탐색/)).toBeInTheDocument();
//     expect(screen.getByText(/STEP 2\n서류 준비/)).toBeInTheDocument();
//     expect(screen.getByText(/STEP 3\n면접 준비/)).toBeInTheDocument();
//   });

//   test('clicking "All" selects all filters', () => {
//     render(<CareerFilter />);

//     const allButton = screen.getByText(/All/);
//     fireEvent.click(allButton);

//     // Click "All" again and check if "STEP 1" only is selected
//     fireEvent.click(allButton);
//     expect(screen.getByText(/STEP 1\n커리어 탐색/)).toHaveClass('bg-pr-100 text-white');
//   });

//   test('clicking a step filter selects it', () => {
//     render(<CareerFilter />);

//     const step1Button = screen.getByText(/STEP 1\n커리어 탐색/);
//     fireEvent.click(step1Button);

//     expect(step1Button).toHaveClass('bg-pr-100 text-white');
//   });

//   test('clicking "All" after selecting steps selects all steps', () => {
//     render(<CareerFilter />);

//     const step1Button = screen.getByText(/STEP 1\n커리어 탐색/);
//     fireEvent.click(step1Button);

//     const allButton = screen.getByText(/All/);
//     fireEvent.click(allButton);

//     expect(screen.getByText(/STEP 1\n커리어 탐색/)).toHaveClass('bg-pr-100 text-white');
//     expect(screen.getByText(/STEP 2\n서류 준비/)).toHaveClass('bg-pr-100 text-white');
//     expect(screen.getByText(/STEP 3\n면접 준비/)).toHaveClass('bg-pr-100 text-white');
//   });
// });
