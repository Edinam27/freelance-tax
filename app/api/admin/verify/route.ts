import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { key } = await request.json();
    const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY;

    if (!ADMIN_SECRET) {
      console.error('ADMIN_SECRET_KEY is not defined in environment variables');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    if (key === ADMIN_SECRET) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid Key' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Error' }, { status: 500 });
  }
}
