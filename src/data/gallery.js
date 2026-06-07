const categories = ['Campus', 'Classrooms', 'Events', 'Workshops', 'Placements'];

export const galleryCategories = ['All', ...categories];

export const galleryImages = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  category: categories[i % categories.length],
  src: `https://picsum.photos/seed/semt-gallery-${i + 1}/800/600`,
  thumb: `https://picsum.photos/seed/semt-gallery-${i + 1}/500/375`,
  alt: `SEMT ${categories[i % categories.length]} photo ${i + 1}`,
}));

export default galleryImages;
