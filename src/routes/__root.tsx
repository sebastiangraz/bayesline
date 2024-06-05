import { Navigation } from '@/components';
import { createRootRoute, Outlet } from '@tanstack/react-router';
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
  )
});
