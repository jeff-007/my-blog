'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();
  const [errorData, setErrorData] = useState<{
    message: string;
    status: string;
    code: number;
  } | null>(null);

  useEffect(() => {
    // 获取错误信息
    fetch('/api/error')
      .then(res => res.json())
      .then(data => {
        setErrorData(data);
      })
      .catch(error => {
        console.error('Error fetching error data:', error);
      });
  }, []);

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">出错了！</h1>
        {errorData && (
          <div className="mb-6">
            <p className="text-gray-700 mb-2">{errorData.message}</p>
            <p className="text-sm text-gray-500">错误代码: {errorData.code}</p>
          </div>
        )}
        <button
          onClick={handleRedirect}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          返回首页
        </button>
      </div>
    </div>
  );
} 