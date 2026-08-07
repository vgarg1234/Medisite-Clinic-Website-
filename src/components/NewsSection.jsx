import React, { useState } from 'react';
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const news = [
  {
    title: 'Lorum Ipsum is Dumy text which you can see',
    date: '18 Sep, 2024',
    comments: '1 Comments',
    image: '/assets/news1.png',
    fallback: 'https://images.unsplash.com/photo-1580281657521-4ca2c486a818?auto=format&fit=crop&w=600&q=80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
  {
    title: 'Lorum Ipsum is Dumy text which you can see',
    date: '18 Sep, 2024',
    comments: '1 Comments',
    image: '/assets/news2.png',
    fallback: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
  {
    title: 'Lorum Ipsum is Dumy text which you can see',
    date: '18 Sep, 2024',
    comments: '1 Comments',
    image: '/assets/news3.png',
    fallback: 'https://images.unsplash.com/photo-1580281657521-4ca2c486a818?auto=format&fit=crop&w=600&q=80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
  {
    title: 'Lorum Ipsum is Dumy text which you can see',
    date: '18 Sep, 2024',
    comments: '1 Comments',
    image: '/assets/news2.png',
    fallback: 'https://images.unsplash.com/photo-1580281657521-4ca2c486a818?auto=format&fit=crop&w=600&q=80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
  {
    title: 'Lorum Ipsum is Dumy text which you can see',
    date: '18 Sep, 2024',
    comments: '1 Comments',
    image: '/assets/news1.png',
    fallback: 'https://images.unsplash.com/photo-1580281657521-4ca2c486a818?auto=format&fit=crop&w=600&q=80',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
  },
];

export default function NewsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box id="news" sx={{ pb: 10 }}>
      <Typography variant="h4" fontWeight={600} align="center" sx={{ mb: 2 }}>
        News & Events
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.{' '}<br />Richard McClintock.
      </Typography>

      <Container maxWidth="lg">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="width:10px;height:10px;background:#2DC2A8;border-radius:5px;display:inline-block;margin:0 4px;transition:all 200ms;"></span>`,
          }}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '48px' }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <Box
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{ position: 'relative' }}
              >
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    transition: 'transform 200ms ease, box-shadow 200ms ease',
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    onError={(e) => { e.currentTarget.src = item.fallback; }}
                    sx={{ width: '100%', height: 220, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ mb: 1 }}>
                      <Typography variant="caption" color="primary">{item.date}</Typography>
                      <Typography variant="caption" color="text.secondary">{item.comments}</Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1, fontSize: '0.95rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </Typography>
                  </CardContent>
                </Card>

                {/* Hover Modal Overlay */}
                {hoveredIndex === index && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(45, 194, 168, 0.92)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      px: 3,
                      textAlign: 'center',
                      zIndex: 2,
                      animation: 'fadeIn 200ms ease',
                      '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#C7F2FF', mb: 2 }}>
                      {item.date} · {item.comments}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </Box>
                )}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
