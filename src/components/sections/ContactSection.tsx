import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactCard from '@/components/ui/ContactCard';
import { Reveal } from '@/components/ui/Reveal';

export const ContactSection = () => {
  const text = useTranslations('ContactSection');
  const contacts = [
    {
      id: 1,
      title: '',
      firstName: 'Dominika',
      lastName: 'Rácz',
      role: text('title-training-organizer'),
      email: 'racz.dominika@iocs.hu',
      phone: '+36 30 427 1285',
      image: '/images/contact/Dom.jpg',
    },
    {
      id: 2,
      title: '',
      firstName: 'András',
      lastName: 'Sándor',
      role: text('title-training-organizer'),
      email: 'sandor.andras@iocs.hu',
      phone: '+36 30 473 9508',
      image: '/images/contact/Bandris.jpg',
    },
    {
      id: 3,
      title: '',
      firstName: 'Zsófia',
      lastName: 'Sebeszta',
      role: text('title-IOCS'),
      email: 'sebeszta.zsofia@iocs.hu',
      phone: '+36 30 276 9770',
      image: '/images/contact/Sebi.jpg',
    },
    {
      id: 4,
      title: '',
      firstName: 'Dorottya',
      lastName: 'Orbán',
      role: text('title-FEB'),
      email: 'orban.dorottya@iocs.hu',
      phone: '+36 30 222 7624',
      image: '/images/contact/Orban.jpg',
    },
  ];

  return (
    <section id='contacts' className={`mx-auto max-w-screen-2xl items-center px-4`}>
      <h1 className='mb-10 text-center text-3xl font-bold'>{text('heading')}</h1>
      <div
        className={`
          mx-auto grid w-fit grid-cols-1 gap-4

          sm:grid-cols-2

          xl:grid-cols-4
        `}
      >
        {contacts.map((contact) => (
          <Reveal key={contact.id} delay={contact.id * 0.2}>
            <ContactCard
              title={contact.title}
              firstName={contact.firstName}
              lastName={contact.lastName}
              role={contact.role}
              email={contact.email}
              phone={contact.phone}
              image={contact.image}
            />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Card
          className={`
            mx-auto mt-10 flex w-fit flex-col items-center gap-8 bg-background p-6

            sm:flex-row
          `}
        >
          <CardHeader className='p-0'>
            <CardTitle className='text-2xl'>{text('send-message')}</CardTitle>
          </CardHeader>
          <CardContent className='w-fit p-0'>
            <a href='mailto:kepzes@iocs.hu' target='_blank' rel='noopener noreferrer' aria-label='Mail'>
              <Button variant='secondary' size='lg' className='text-lg'>
                <Mail />
                kepzes@iocs.hu
              </Button>
            </a>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
};
