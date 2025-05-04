'use client';

import { useState, useEffect } from 'react';
import { FaServer } from 'react-icons/fa';

export default function UptimeStatus() {
  const [status, setStatus] = useState<'up' | 'down' | 'loading'>('loading');
  const [uptime, setUptime] = useState<number>(0);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
          },
          body: new URLSearchParams({
            api_key: process.env.NEXT_PUBLIC_UPTIMEROBOT_API_KEY || '',
            format: 'json',
            logs: '1',
          }),
        });

        const data = await response.json();
        if (data.stat === 'ok' && data.monitors.length > 0) {
          const monitor = data.monitors[0];
          setStatus(monitor.status === 2 ? 'up' : 'down');
          setUptime(monitor.alltimeuptimeratio);
        }
      } catch (error) {
        setStatus('down');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 300000); // Перевіряти кожні 5 хвилин
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg">
        <FaServer className={`text-lg ${status === 'up' ? 'text-green-500' : status === 'down' ? 'text-red-500' : 'text-yellow-500'}`} />
        <span className="text-sm font-medium">
          {status === 'up' ? `Аптайм: ${uptime.toFixed(2)}%` : status === 'down' ? 'Сервіс недоступний' : 'Перевірка...'}
        </span>
      </div>
    </div>
  );
} 