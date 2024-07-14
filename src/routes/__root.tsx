import { Layout } from '@/components';
import { SEO } from '@/helpers/SEO';
import { themeClasses } from '@/helpers/utils';
import { createRootRouteWithContext, Outlet, useRouter, ScrollRestoration } from '@tanstack/react-router';

// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<ThemeValueContext>()({
  component: () => {
    const router = useRouter();
    const findRouteContext = [...router.state.matches].reverse().find((d) => d.routeContext);

    const title = findRouteContext?.routeContext.title || '';
    const description = findRouteContext?.routeContext.description || '';
    const theme = findRouteContext?.routeContext.themeValue || 0;

    const themeClass = themeClasses[theme] || '';

    return (
      <>
        <Layout theme={themeClass}>
          <>
            <ScrollRestoration />
            <div className="tile theme"></div>
            <Outlet />
            <SEO title={title} description={description} />
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
  title: string;
  meta: Array<{
    name: string;
    content: string;
  }>;
}
