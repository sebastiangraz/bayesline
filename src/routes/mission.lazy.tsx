import { Mission } from '@/pages/Mission';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/mission')({
  component: Mission
});
