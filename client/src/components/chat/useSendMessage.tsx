import { type FormEvent, useEffect, useRef, useState } from 'react';
import { sendMessage } from '../../api/fetches.ts';

export const useSendMessage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<
    { from: 'user' | 'bot'; text: string }[]
  >([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: input }]);
    const userMessage = input;
    setInput('');

    try {
      const reply = await sendMessage(userMessage);
      setMessages((prev) => [...prev, { from: 'bot', text: reply }]);
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Ошибка сервера' }]);
    }
  };

  return {
    containerRef,
    messages,
    input,
    setInput,
    handleSend,
  }
}
