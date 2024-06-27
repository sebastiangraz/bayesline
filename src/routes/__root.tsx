import { Navigation, Layout } from '@/components';
import { createRootRouteWithContext, Outlet, useRouter } from '@tanstack/react-router';

import { TanStackRouterDevtools } from '@tanstack/router-devtools';
export interface ThemeValueContext {
  themeValue: number;
}

export const Route = createRootRouteWithContext<ThemeValueContext>()({
  component: () => {
    const router = useRouter();

    const matchWithTitle = [...router.state.matches].reverse().find((d) => d.routeContext.themeValue);
    const title = matchWithTitle?.routeContext.themeValue || 0;

    return (
      <>
        <Layout>
          <>
            <Navigation />
            <Outlet />
          </>
        </Layout>
        <div style={{ fontSize: '16px' }}>
          <TanStackRouterDevtools />
        </div>
      </>
    );
  },
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
