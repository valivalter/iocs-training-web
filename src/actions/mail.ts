'use server';

import { Resend } from 'resend';
import { SendMailOptions } from 'nodemailer';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function sendEmail(options: SendMailOptions) {
  try {
    await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo || process.env.EMAIL_FROM_ADDRESS,
    });
  } catch (error) {
    console.error(`Failed to send email to ${options.to}`, error);
  }
}
