import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { buttonVariants } from '@/components/ui/button';

export const SharedLayout = () => {
  return (
    <div className="container md:mx-auto pb-8">
      <header className="py-8">
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? buttonVariants({ variant: 'default' })
                      : buttonVariants({ variant: 'outline' })
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? buttonVariants({ variant: 'default' })
                      : buttonVariants({ variant: 'outline' })
                  }
                >
                  Movies
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
