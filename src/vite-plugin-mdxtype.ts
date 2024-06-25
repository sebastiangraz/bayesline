// Import required modules
import matter from 'gray-matter';
import { z } from 'zod';

import path from 'path';

const STATUSES = {
  disabled: 0,
  active: 1,
  expired: 2
} as const;

// Define a schema for validation using Zod
const frontmatterSchema = z.object({
  title: z.string(),
  published: z.date().optional(),
  theme: z.nativeEnum(STATUSES).optional(),
  featured: z.boolean().optional(),
  excerpt: z.string().optional()
});

// Custom MDX plugin with frontmatter validation
export default function mdxCustomPlugin() {
  return {
    name: 'mdx-custom',
    enforce: 'pre',
    transform(src: any, id: any) {
      if (id.endsWith('.mdx')) {
        const { data } = matter(src);

        try {
          frontmatterSchema.parse(data);
        } catch (error) {
          throw new Error(`Frontmatter validation error in ${path.basename(id)}: ${error}`);
        }
      }
    }
  };
}
