import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: '发生错误，请返回首页',
    status: 'error',
    code: 404,
    redirect: '/'
  }, { 
    status: 404 
  });
} 