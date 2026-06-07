import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '../common/SectionHeading';
import InstructorCard from '../common/InstructorCard';
import { instructors } from '../../data/instructors';

export default function Instructors() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Meet Our Experts"
          title="Learn From Experienced Course Instructors"
          highlight="Course Instructors"
          description="Our faculty bring years of real industry and teaching experience to every classroom."
        />

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-14"
          >
            {instructors.map((ins) => (
              <SwiperSlide key={ins.id} className="h-auto">
                <InstructorCard instructor={ins} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
