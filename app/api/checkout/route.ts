import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, amount, currency } = await request.json();
    
    // In a real app, validate input
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const KORA_SECRET_KEY = process.env.KORA_SECRET_KEY;
    const reference = `HUSTLE_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    // Determine callback URL based on environment
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const callbackUrl = `${protocol}://${host}/checkout/success`;

    const response = await fetch('https://api.korapay.com/merchant/api/v1/charges/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KORA_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount || 5000, // Default to 5000 (NGN or units) if not set
        currency: currency || 'NGN',
        customer: {
          email,
        },
        reference,
        redirect_url: callbackUrl,
        notification_url: `${protocol}://${host}/api/webhook/kora`, // Optional webhook
        channels: ['card', 'bank_transfer', 'mobile_money'],
      }),
    });

    const data = await response.json();

    if (!data.status || !data.data.checkout_url) {
      console.error('Kora Init Error:', data);
      return NextResponse.json({ error: 'Failed to initialize payment' }, { status: 500 });
    }

    return NextResponse.json({ 
      checkoutUrl: data.data.checkout_url, 
      reference 
    });

  } catch (error) {
    console.error('Payment API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
