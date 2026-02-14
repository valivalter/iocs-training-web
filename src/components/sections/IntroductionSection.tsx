import { useTranslations } from 'next-intl';
import React from 'react';

import VerticalCarousel from '@/components/ui/VerticalCarousel';

const IntroductionSection = () => {
  const text = useTranslations('IntroductionSection');
  const images = [
    { src: '/images/groups/Zso_updated.jpg', width: 1855, height: 1233 },
    { src: '/images/groups/Sisa.png', width: 2048, height: 1536 },
    { src: '/images/groups/Petra.png', width: 4000, height: 3000 },
    { src: '/images/groups/Oliv.jpg', width: 1668, height: 1251 },
    { src: '/images/groups/Meszaros.jpg', width: 2334, height: 1880 },
    { src: '/images/groups/Lalak.png', width: 2048, height: 1536 },
    { src: '/images/groups/Kisi.png', width: 878, height: 646 },
    { src: '/images/groups/Gyomber.jpg', width: 1242, height: 791 },
    { src: '/images/groups/Francis.jpg', width: 1536, height: 1024 },
    { src: '/images/groups/Almos.jpg', width: 1251, height: 910 },
    { src: '/images/groups/Katus.png', width: 1477, height: 1125 },
  ];

  return (
    <section id='groups' className='mx-auto mb-32 max-w-screen-lg px-10'>
      <h1 className='mb-10 text-center text-3xl font-bold'>{text('heading')}</h1>
      <VerticalCarousel images={images} />
    </section>
  );
};

export default IntroductionSection;
