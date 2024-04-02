/* import { Navigation } from '@/components'; */
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <Navigation /> */}
      <main>
        <Outlet />
      </main>
      {/* <TanStackRouterDevtools /> */}
    </>
  )
});
