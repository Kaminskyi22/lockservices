'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  message: string;
  type: 'bug' | 'feature' | 'other';
};

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (_error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 w-80">
        <h3 className="text-lg font-semibold mb-4">Зворотній зв&apos;язок</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ім&apos;я</label>
            <input
              {...register('name', { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ваше ім&apos;я"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Це поле обов&apos;язкове</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register('email', { 
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ваш email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Введіть коректний email</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Тип повідомлення</label>
            <select
              {...register('type', { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bug">Повідомити про помилку</option>
              <option value="feature">Запропонувати функцію</option>
              <option value="other">Інше</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Повідомлення</label>
            <textarea
              {...register('message', { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Ваше повідомлення"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">Це поле обов&apos;язкове</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                <span>Відправка...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Надіслати</span>
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-sm text-center">Дякуємо за ваш відгук!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm text-center">Помилка при відправці. Спробуйте пізніше.</p>
          )}
        </form>
      </div>
    </div>
  );
} 