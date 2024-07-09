import { Navigation, Layout } from '@/components';
import { themeClasses } from '@/helpers/utils';
import { createRootRouteWithContext, Outlet, useRouter, ScrollRestoration } from '@tanstack/react-router';

// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<ThemeValueContext>()({
  component: () => {
    const router = useRouter();
    const findThemeValue = [...router.state.matches].reverse().find((d) => d.routeContext.themeValue);
    const theme = findThemeValue?.routeContext.themeValue || 0;
    const themeClass = themeClasses[theme] || '';

    return (
      <>
        <Layout theme={themeClass}>
          <>
            <ScrollRestoration />
            <div className="tile theme"></div>
            <Outlet />
          </>
        </Layout>
        {/* <div style={{ fontSize: '16px' }}>
          <TanStackRouterDevtools />
        </div> */}
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

export interface ThemeValueContext {
  themeValue: number;
}
