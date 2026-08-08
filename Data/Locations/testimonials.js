import { locations } from './index';

export const pkTestimonials = locations.flatMap((city) =>
  (city.testimonials || []).map((testimonial) => ({
    ...testimonial,
    city: city.name,
  }))
);

export const pkTestimonialsFeatured = pkTestimonials.slice(0, 6);
