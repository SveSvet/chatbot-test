import { type FormEvent, useEffect, useRef, useState } from 'react';
import { sendMessage } from '../../api/fetches.ts';
import { v4 as uuidv4 } from 'uuid';

export const useSendMessage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<
    { from: 'user' | 'bot'; text: string; id: string }[]
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
    const uiId = uuidv4();

    setMessages((prev) => [...prev, { from: 'user', text: input, id: uiId }]);
    const userMessage = input;
    setInput('');

    try {
      const data = await sendMessage(userMessage);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: data.reply, id: data.id },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Ошибка сервера', id: uiId },
      ]);
    }
  };

  return {
    containerRef,
    messages,
    input,
    setInput,
    handleSend,
  };
};
