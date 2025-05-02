import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '7710869128:AAEGhP3Q3Ee0PFoqdhT-US0ITXDZPjUHM0w';
const TELEGRAM_CHAT_ID = '6125664936'; // Замініть на ваш chat_id

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    // Формуємо повідомлення для Telegram
    const telegramMessage = `
🔔 Нове повідомлення з сайту!

👤 Ім'я: ${name}
📞 Телефон: ${phone}
💬 Повідомлення: ${message}
    `.trim();

    // Відправляємо повідомлення в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      throw new Error('Failed to send Telegram message');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 