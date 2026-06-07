# Assets Folder

Drop your production assets here. Suggested structure:

```
public/
├── assets/
│   ├── images/
│   │   ├── hero/          # Hero & banner images
│   │   ├── courses/       # Course thumbnails
│   │   ├── instructors/   # Faculty photos
│   │   ├── gallery/       # Campus gallery
│   │   └── blog/          # Blog cover images
│   ├── logos/             # Partner / accreditation logos
│   └── icons/             # Custom SVG icons
├── favicon.svg
├── og-image.svg
└── robots.txt
```

The demo currently uses remote placeholder images (picsum.photos, unsplash, pravatar).
Replace the image URLs in `src/data/*.js` with paths like `/assets/images/courses/adca.jpg`
once real assets are added here.
