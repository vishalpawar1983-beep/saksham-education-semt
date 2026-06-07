import { categories, courses } from './courses';

// Full catalogue for the Courses mega menu: every category with all its courses.
// Uses the full category name (e.g. "Fashion / Textile / Interior Designing")
// as the heading and links each course to its detail page.
export const megaCategories = categories.map((cat) => ({
  name: cat.name,
  slug: cat.slug,
  icon: cat.icon,
  color: cat.color,
  courses: courses
    .filter((c) => c.category === cat.slug)
    .map((c) => ({ name: c.title, path: `/courses/${c.slug}` })),
}));

export const totalCourses = courses.length;
