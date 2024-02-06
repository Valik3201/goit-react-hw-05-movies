import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
