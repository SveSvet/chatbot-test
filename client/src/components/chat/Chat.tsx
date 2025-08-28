import { Typography, Button, Input, Message } from '../ui';
import { clsx } from 'clsx';
import styles from './styles.module.css';
import { useSendMessage } from './useSendMessage.tsx';

export const Chat = () => {
  const { containerRef, messages, handleSend, input, setInput } =
    useSendMessage();

  return (
    <div className={clsx(styles.container)}>
      <Typography variant="h1" className={clsx(styles.title)}>
        Test-chat
      </Typography>
      <div className={clsx(styles['dialog-window'])} ref={containerRef}>
        {messages.map((m) => (
          <Message
            sender={m.from}
            text={m.text}
            key={m.id}
            className={styles[m.from]}
          />
        ))}
      </div>
      <form className={clsx(styles.form)} onSubmit={handleSend}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button>Отправить</Button>
      </form>
    </div>
  );
};
