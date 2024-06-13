import { Navigation, Layout } from '@/components';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import style from '@/pages/Signup/signup.module.css';
/* import { TanStackRouterDevtools } from '@tanstack/router-devtools'; */

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <>
          <Navigation />
          <Outlet />
        </>
      </Layout>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: () => {
    return (
      <>
        <div>
          <p className="col">This setting page doesn't exist!</p>
        </div>
      </>
    );
  }
});
