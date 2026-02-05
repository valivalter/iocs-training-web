import { useTranslations } from 'next-intl';
import React from 'react';

import VerticalCarousel from '@/components/ui/VerticalCarousel';

const IntroductionSection = () => {
  const text = useTranslations('IntroductionSection');
  const images = [
    { src: '/images/groups/1.jpg', width: 1080, height: 908 },
    { src: '/images/groups/2.jpg', width: 1020, height: 676 },
    { src: '/images/groups/3.jpg', width: 1080, height: 1086 },
    { src: '/images/groups/4.jpg', width: 1006, height: 1342 },
  ];

  return (
    <section id='groups' className='mx-auto mb-32 max-w-screen-lg px-10'>
      <h1 className='mb-10 text-center text-3xl font-bold'>{text('heading')}</h1>
      <VerticalCarousel images={images} />
    </section>
  );
};

export default IntroductionSection;
