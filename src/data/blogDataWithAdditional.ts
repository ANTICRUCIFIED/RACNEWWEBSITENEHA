import { BLOG_POSTS as STATIC_BLOG_POSTS } from './blogData';
import { ADDITIONAL_BLOG_POSTS } from './additionalBlogData';

// Avoid duplicate entries
export const BLOG_POSTS = [...ADDITIONAL_BLOG_POSTS];
STATIC_BLOG_POSTS.forEach(post => {
  if (!BLOG_POSTS.some(p => p.id === post.id)) {
    BLOG_POSTS.push(post);
  }
});

export type { BlogPost } from './blogData';
