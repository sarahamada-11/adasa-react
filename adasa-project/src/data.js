import data from './data/posts.json';

export const posts = data.posts;
export const categories = data.categories?.length
  ? data.categories.map((category) => typeof category === 'string' ? category : category.name)
  : [...new Set(posts.map((post) => post.category))];
