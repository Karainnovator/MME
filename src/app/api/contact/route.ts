import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 submissions per IP per 15 minutes
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// Clean up old entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimit) {
    if (now > entry.resetAt) {
      rateLimit.delete(ip);
    }
  }
}, 30 * 60 * 1000);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
        { status: 429 }
      );
    }

    const { name, email, phone, model, problem } = await request.json();

    if (!name || !email || !phone || !model) {
      return NextResponse.json(
        { error: 'Naam, email, telefoon en model zijn verplicht' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = escapeHtml(String(name).slice(0, 100));
    const safeEmail = escapeHtml(String(email).slice(0, 200));
    const safePhone = escapeHtml(String(phone).slice(0, 20));
    const safeModel = escapeHtml(String(model).slice(0, 50));
    const safeProblem = problem ? escapeHtml(String(problem).slice(0, 1000)) : '';

    await resend.emails.send({
      from: 'MME Contact <contact@mmedienstverlening.nl>',
      replyTo: safeEmail,
      to: 'manno.elwasty@icloud.com',
      subject: `Nieuw contactverzoek van ${safeName} — ${safeModel}`,
      html: `
        <h2>Nieuw contactverzoek via de website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Naam</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Telefoon</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Model</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeModel}</td>
          </tr>
          ${safeProblem ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Probleem</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${safeProblem}</td>
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
