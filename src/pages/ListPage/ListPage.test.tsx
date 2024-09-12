// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import ListPage from './ListPage';
// import { BrowserRouter as Router } from 'react-router-dom';
// import axios from 'axios';
// import '@testing-library/jest-dom';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe('ListPage', () => {
//   beforeEach(() => {
//     mockedAxios.get.mockResolvedValue({
//       data: {
//         result: {
//           programDtos: [],
//           totalPageCount: 0
//         }
//       }
//     });
//   });

//   test('renders CareerFilter and TypeFilter components', async () => {
//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('전체')).toBeInTheDocument();
//       expect(screen.getByText('커리어 탐색')).toBeInTheDocument();
//     });
//   });

//   test('fetches and displays programs', async () => {
//     mockedAxios.get.mockResolvedValue({
//       data: {
//         result: {
//           programDtos: [
//             { programId: '1', title: 'Test Program', thumbnail: '', tag: 'ALL', dtype: 'CHALLENGE', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' }
//           ],
//           totalPageCount: 1
//         }
//       }
//     });

//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('Test Program')).toBeInTheDocument();
//     });
//   });

//   test('changes page when PageNation component is clicked', async () => {
//     // Mock the fetch call to return some dummy data
//     mockedAxios.get.mockResolvedValue({
//       data: {
//         result: {
//           programDtos: [
//             { programId: '1', title: 'Test Program', thumbnail: '', tag: 'ALL', dtype: 'CHALLENGE', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' }
//           ],
//           totalPageCount: 2
//         }
//       }
//     });

//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     // Assuming PageNation component has a button to change pages
//     // Add appropriate queries and interactions
//     // Example:
//     // fireEvent.click(screen.getByText('Next Page'));
//     // await waitFor(() => expect(screen.getByText('Test Program')).toBeInTheDocument());
//   });

//   test('filters programs based on CareerFilter', async () => {
//     // Mock data for filtering
//     mockedAxios.get.mockResolvedValue({
//       data: {
//         result: {
//           programDtos: [
//             { programId: '1', title: 'Test Program 1', thumbnail: '', tag: 'CAREER_EXPLORE', dtype: 'CHALLENGE', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' },
//             { programId: '2', title: 'Test Program 2', thumbnail: '', tag: 'DOCUMENT_PREPARE', dtype: 'LIVECLASS', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' }
//           ],
//           totalPageCount: 1
//         }
//       }
//     });

//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     // Simulate filter click
//     fireEvent.click(screen.getByText('커리어 탐색'));
//     await waitFor(() => {
//       expect(screen.getByText('Test Program 1')).toBeInTheDocument();
//       expect(screen.queryByText('Test Program 2')).not.toBeInTheDocument();
//     });
//   });

//   test('filters programs based on TypeFilter', async () => {
//     // Mock data for filtering
//     mockedAxios.get.mockResolvedValue({
//       data: {
//         result: {
//           programDtos: [
//             { programId: '1', title: 'Test Program 1', thumbnail: '', tag: 'ALL', dtype: 'CHALLENGE', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' },
//             { programId: '2', title: 'Test Program 2', thumbnail: '', tag: 'ALL', dtype: 'LIVECLASS', recruitStatus: 'RECRUITING', programStartDate: '', programEndDate: '', intro: '' }
//           ],
//           totalPageCount: 1
//         }
//       }
//     });

//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     // Simulate filter click
//     fireEvent.click(screen.getByText('LIVECLASS'));
//     await waitFor(() => {
//       expect(screen.getByText('Test Program 2')).toBeInTheDocument();
//       expect(screen.queryByText('Test Program 1')).not.toBeInTheDocument();
//     });
//   });

//   test('handles empty state', async () => {
//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('현재 프로그램이 없습니다')).toBeInTheDocument();
//     });
//   });

//   test('handles API errors', async () => {
//     mockedAxios.get.mockRejectedValue(new Error('API error'));

//     render(
//       <Router>
//         <ListPage />
//       </Router>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('에러 발생')).toBeInTheDocument();
//     });
//   });
// });
