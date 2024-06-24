import { Navigation, Layout } from '@/components';
import { createRootRoute, Outlet } from '@tanstack/react-router';

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
          <p>This setting page doesn't exist!</p>
        </div>
      </>
    );
  }
});
