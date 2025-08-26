import { useState } from "react";

export const Chat = ()=> {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    // sendMessage
  };

  return (
    <div>
      <div>
        {/* messages mapping */}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
}
