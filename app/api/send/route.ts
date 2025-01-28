import { EmailTemplate } from '@/components/email-template' 
import { Resend } from 'resend';
const RESEND_API_KEY="re_Kkc1U7NU_8i6mPacH5DBREhVR9RQoDvVn"


import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(RESEND_API_KEY);

export async function POST(username: string) {
  console.log(username);
  const resend = new Resend(RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: username }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    
      console.log('Email sent successfully:', data);
      return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}





/*

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Receipt for your payment',
        html: '<p>Thanks for the payment</p>',
        attachments: [
          {
            path: 'https://resend.com/static/sample/invoice.pdf',
            filename: 'sample-invoice.pdf',
          },
        ],
      });

      return res.status(200).send({ data: data });
    }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
export default send;

*/