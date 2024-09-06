import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import ListPage from '../pages/ListPage/ListPage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/listpage" replace />, // 리디렉션
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/program/:programId',
        element: <DetailPage />,
      },
      {
        path: '/program/:programId/review',
        element: <ReviewPage />,
      },
      {
        path: 'listpage',
        element: <ListPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
