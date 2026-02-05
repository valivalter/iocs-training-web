'use client';

import { Download } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/hooks/use-toast';

const RulesPage = () => {
  const text = useTranslations('Rules');
  const locale = useLocale();
  const rulesPath = `/documents/rules/house-rules-${locale}.pdf`;

  return (
    <main className='mx-auto min-h-screen max-w-screen-xl px-6 pt-32'>
      <h1 className='relative z-30 mb-10 text-center text-3xl font-semibold'>{text('heading')}</h1>

      <h2 className='mb-4 text-xl font-semibold'>{text('greeting')}</h2>
      <p className='mb-2'>{text('generalInfo')}</p>
      <p className='mb-10'>{text('acceptance')}</p>

      <h2 className='mb-4 text-xl font-semibold'>{text('title')}</h2>

      <ol
        className={`
          list-inside list-decimal space-y-4

          marker:pr-4 marker:text-xl marker:font-bold marker:text-primary
        `}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <li key={index} className='break-words text-justify'>
            {text.rich(`rules.rule-${index + 1}`, {
              bufe: (chunks) => (
                <span
                  onClick={() => {
                    toast({
                      title: 'Megtaláltad Szamit! 🐩',
                      description: '',
                      action: (
                        <ToastAction altText='Dismiss Notification'>
                          <PawPrint />
                        </ToastAction>
                      ),
                    });
                  }}
                >
                  {chunks}
                </span>
              ),
            })}
          </li>
        ))}
      </ol>

      <div className='my-20 flex justify-center'>
        <a href={rulesPath} download>
          <Button
            variant='secondary'
            size='lg'
            className={`
              flex items-center gap-2 bg-gradient-to-br from-primary to-secondary font-bold transition-transform

              hover:scale-105
            `}
          >
            {text('download')}
            <Download className='h-5 w-5' strokeWidth={3} />
          </Button>
        </a>
      </div>
    </main>
  );
};

export default RulesPage;
