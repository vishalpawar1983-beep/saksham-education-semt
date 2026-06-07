import { Helmet } from 'react-helmet-async';
import { site } from '../../data/site';

/**
 * Centralised SEO component: meta tags, Open Graph, Twitter cards and JSON-LD.
 */
export default function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  schema,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${site.shortName}`
    : `${site.fullName} | ${site.tagline}`;
  const desc =
    description ||
    'SEMT provides career-oriented diploma, certification, IT, management, teacher training and professional development programs designed to enhance employability.';
  const url = `${site.url}${path}`;
  const ogImage = image || `${site.url}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.fullName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

// --- Reusable schema builders -------------------------------------------
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.fullName,
  alternateName: site.shortName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: 'IN',
  },
  sameAs: Object.values(site.social),
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.fullName,
  image: `${site.url}/og-image.jpg`,
  '@id': site.url,
  url: site.url,
  telephone: site.phone,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: 'IN',
  },
};

export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.path}`,
  })),
});

export const buildCourseSchema = (course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.shortDescription,
  provider: {
    '@type': 'EducationalOrganization',
    name: site.fullName,
    sameAs: site.url,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    courseWorkload: course.duration,
  },
});
