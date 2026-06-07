import SEO, { organizationSchema, localBusinessSchema } from '../components/common/SEO';
import HeroSlider from '../components/sections/HeroSlider';
import TrustedBy from '../components/sections/TrustedBy';
import Features from '../components/sections/Features';
import Categories from '../components/sections/Categories';
import PopularCourses from '../components/sections/PopularCourses';
import AboutSection from '../components/sections/AboutSection';
import WhyChoose from '../components/sections/WhyChoose';
import CounterSection from '../components/sections/CounterSection';
import GoogleReviews from '../components/sections/GoogleReviews';
import BlogSection from '../components/sections/BlogSection';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <SEO
        title="Career Focused Skill Development Institute"
        description="SEMT provides career-oriented diploma, certification, IT, management, teacher training and professional development programs designed to enhance employability in Mohali, Punjab."
        path="/"
        schema={[organizationSchema, localBusinessSchema]}
      />
      <HeroSlider />
      <TrustedBy />
      <Features />
      <Categories />
      <PopularCourses />
      <AboutSection />
      <WhyChoose />
      <CounterSection />
      <GoogleReviews />
      <BlogSection />
      <CTABanner />
    </>
  );
}
