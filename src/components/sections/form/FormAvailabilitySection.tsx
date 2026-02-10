import { useTranslations } from 'next-intl';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/date-picker';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormSchema } from '@/lib/formValidation';
import { dateToString, stringToDate } from '@/lib/utils';

interface FormAvailabilitySectionProps {
  form: UseFormReturn<FormSchema>;
}

export const FormAvailabilitySection: React.FC<FormAvailabilitySectionProps> = ({ form }) => {
  const text = useTranslations('ApplicationForm');
  const minUnavailableDate = new Date('2026-02-25');
  const maxUnavailableDate = new Date('2026-04-17');

  return (
    <>
      <h2 className='text-xl font-semibold'>{text('sections.availability')}</h2>
      <p className='mt-4 text-sm'>{text('descriptions.availability')}</p>
      <div
        className={`
          mt-4 grid grid-cols-1 gap-x-10 gap-y-5

          sm:grid-cols-2
        `}
      >
        <FormField
          control={form.control}
          name='availableAtWeekend1'
          render={({ field }) => {
            return (
              <FormItem className='flex flex-row items-center space-x-4 space-y-0'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>{text('labels.availableAtWeekend1')}</FormLabel>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='availableAtWeekend2'
          render={({ field }) => {
            return (
              <FormItem className='flex flex-row items-center space-x-4 space-y-0'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>{text('labels.availableAtWeekend2')}</FormLabel>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>
      <div className='mt-6'>
        <p className='mb-4 text-sm'>{text('descriptions.unavailableDates')}</p>
        <div
          className={`
            grid grid-cols-1 gap-x-6 gap-y-5

            sm:grid-cols-3
          `}
        >
          <FormField
            control={form.control}
            name='unavailableDate1'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker
                    value={field.value ? stringToDate(field.value) : undefined}
                    onChange={(value) => field.onChange(value ? dateToString(value) : undefined)}
                    placeholder={text('placeholders.unavailableDate')}
                    allowFuture={true}
                    minDate={minUnavailableDate}
                    maxDate={maxUnavailableDate}
                    weekdaysOnly={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='unavailableDate2'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker
                    value={field.value ? stringToDate(field.value) : undefined}
                    onChange={(value) => field.onChange(value ? dateToString(value) : undefined)}
                    placeholder={text('placeholders.unavailableDate')}
                    allowFuture={true}
                    minDate={minUnavailableDate}
                    maxDate={maxUnavailableDate}
                    weekdaysOnly={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='unavailableDate3'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker
                    value={field.value ? stringToDate(field.value) : undefined}
                    onChange={(value) => field.onChange(value ? dateToString(value) : undefined)}
                    placeholder={text('placeholders.unavailableDate')}
                    allowFuture={true}
                    minDate={minUnavailableDate}
                    maxDate={maxUnavailableDate}
                    weekdaysOnly={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <hr className='my-6' />
    </>
  );
};
