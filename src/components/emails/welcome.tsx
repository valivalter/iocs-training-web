import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import React from 'react';

export default function WelcomeEmail({ name, locale }: { name: string; locale: string }) {
  const hungarian = locale === 'hu';

  return (
    <Html>
      <Head />
      <Preview>
        {hungarian
          ? 'Fontos információk a 2026-os Instruktorképzésről'
          : 'Important information about the 2026 Instructor Training'}
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#6b2d7a',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className='bg-offwhite font-sans text-base'>
          {process.env.APP_URL && (
            <Img
              src={`${process.env.APP_URL}/images/logo.png`}
              width='60'
              height='60'
              alt='IÖCS'
              className='mx-auto my-20'
            />
          )}
          <Container className='bg-white p-45'>
            <Heading className='my-0 mb-20 text-center leading-8'>
              {hungarian ? 'Üdvözlünk az Instruktorképzésen' : 'Welcome to the Instructor Training'}, {name} 👋
            </Heading>

            <Section>
              <Row>
                <Text className='text-base'>
                  {hungarian ? (
                    <>
                      Hálásak vagyunk, hogy jelentkeztél a <strong>2026-os Instruktorképzésre</strong>!
                    </>
                  ) : (
                    <>
                      We are pleased that you have applied for the <strong>2026 Instructor Training</strong>!
                    </>
                  )}
                </Text>

                <Text className='text-base'>
                  {hungarian
                    ? 'Szeretnénk néhány fontos információt megosztani Veled:'
                    : 'We would like to share a few significant details about the event:'}
                </Text>
              </Row>
            </Section>

            <ul>
              <li className='mb-20'>
                {hungarian ? (
                  <>
                    A megnyitó <strong>február 25-én, 17 órakor</strong> kezdődik. Arra szeretnénk kérni Téged, hogy{' '}
                    <strong>16:45-re érkezz</strong> a <strong>Nagyvárad téri Elméleti Tömb Dísztermébe</strong> (1089
                    Budapest, Nagyvárad tér 4.), hogy a megnyitót időben tudjuk kezdeni.
                  </>
                ) : (
                  <>
                    The opening ceremony will be held on <strong>February 25th at 5:00 PM</strong> in{' '}
                    <strong>Nagyvárad tér Theoretical Building auditorium</strong> (Nagyvárad tér 4, Budapest, 1089).
                    Please arrive at <strong>4:45 PM</strong> so that we can start the opening on time.
                  </>
                )}
              </li>
              <li className='mb-20'>
                {hungarian ? (
                  <>
                    A megnyitó után rögtön sor kerül az első képzésalkalomra, ezért készülj úgy, hogy ez egy{' '}
                    <strong>egész estés elfoglaltság</strong> lesz. Cserébe viszont sok izgalmas programmal és
                    meglepetéssel készülünk Neked!
                  </>
                ) : (
                  <>
                    After the opening ceremony, the first training session will take place, so please be prepared that
                    the program <strong>lasts for a few hours</strong>. In return, we have put together thrilling
                    programs and surprises just for you!
                  </>
                )}
              </li>
              <li className='mb-20'>
                {hungarian ? (
                  <>
                    A képzésekre ezenkívül <strong>hozz magaddal innivalót és saját repoharat/poharat</strong>, a
                    jókedvedet és a lelkesedésedet! Valamint az első alkalmon derül ki, hogy mikor lesznek a további
                    képzésalkalmak, így készülj az órarendeddel és a határidőnaplóddal!
                  </>
                ) : (
                  <>
                    For further training sessions, please <strong>bring your own drink and reusable cup</strong>, your
                    cheerfulness and enthusiasm! Moreover, the first training session will shed light on the date of the
                    future sessions, therefore make sure to bring your calendar or notebook!
                  </>
                )}
              </li>
            </ul>

            <Section>
              <Row>
                <Text className='text-base'>
                  {hungarian ? (
                    <>
                      Már nagyon várjuk, hogy találkozzunk{' '}
                      <strong>16:45-kor a Nagyvárad téri Elméleti Tömb Dísztermében</strong>! Addig is kövesd
                      figyelemmel az IÖCS <Link href='https://www.facebook.com/instruktorok'>Facebook</Link>, illetve{' '}
                      <Link href='https://www.instagram.com/iocs_official'>Instagram</Link> oldalát és az esemény
                      bejegyzéseit!
                    </>
                  ) : (
                    <>
                      We can&#39;t wait to meet you at <strong>4:45 PM in the auditorium of the NET</strong>! Until
                      then, please keep tabs on the{' '}
                      <Link href='https://www.facebook.com/instruktorok'>Facebook page</Link> of IÖCS and our{' '}
                      <Link href='https://www.instagram.com/iocs_official'>Instagram page</Link> as well as the
                      event&#39;s posts!
                    </>
                  )}
                </Text>

                <Text className='text-base'>
                  {hungarian ? (
                    <>
                      Ha bármilyen kérdésed van, fordulj hozzánk bizalommal! Keress minket a{' '}
                      <Link href='mailto:kepzes@iocs.hu'>kepzes@iocs.hu</Link> címen!
                    </>
                  ) : (
                    <>
                      If you have any questions, feel free to reach out to us! Contact us at{' '}
                      <Link href='mailto:kepzes@iocs.hu '>kepzes@iocs.hu</Link>!
                    </>
                  )}
                </Text>
              </Row>
            </Section>

            <Section className='mt-10 text-center'>
              <Button href={process.env.APP_URL} className='bg-brand rounded-lg px-[18px] py-3 text-white'>
                {hungarian ? 'Weboldal megtekintése' : 'Visit the website'}
              </Button>
            </Section>
          </Container>

          <Container>
            <Text className='text-center text-gray-400 mb-45'>
              Instruktor Öntevékeny Csoport | Nagyvárad tér 4, Budapest, 1089
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
