import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, model, problem } = await request.json();

    if (!name || !phone || !model) {
      return NextResponse.json(
        { error: 'Naam, telefoon en model zijn verplicht' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'MME Contact <onboarding@resend.dev>',
      to: 'manno.elwasty@icloud.com',
      subject: `Nieuw contactverzoek van ${name} — ${model}`,
      html: `
        <h2>Nieuw contactverzoek via de website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Naam</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Telefoon</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Model</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${model}</td>
          </tr>
          ${problem ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Probleem</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${problem}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 16px; color: #666; font-size: 12px;">Verzonden via mmedienstverlening.nl</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis bij het versturen' },
      { status: 500 }
    );
  }
}
