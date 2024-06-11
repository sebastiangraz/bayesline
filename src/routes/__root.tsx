import { Navigation } from '@/components';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import style from '@/pages/Signup/signup.module.css';
/* import { TanStackRouterDevtools } from '@tanstack/router-devtools'; */

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: () => {
    return (
      <>
        <div className={`${style.page}`}>
          <div className="tile"></div>
          <p>This setting page doesn't exist!</p>
        </div>
      </>
    );
  }
});
