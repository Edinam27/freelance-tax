import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { reference } = await request.json();
    const KORA_SECRET_KEY = process.env.KORA_SECRET_KEY;

    const response = await fetch(`https://api.korapay.com/merchant/api/v1/charges/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${KORA_SECRET_KEY}`,
      },
    });

    const data = await response.json();

    if (data.status && data.data.status === 'success') {
      return NextResponse.json({ success: true, data: data.data });
    } else {
      return NextResponse.json({ success: false, status: data.data?.status || 'failed' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
