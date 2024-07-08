import { createLazyFileRoute } from '@tanstack/react-router';
import { News } from '@/pages/News';

export const Route = createLazyFileRoute('/news/')({
  component: News
});
