import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
