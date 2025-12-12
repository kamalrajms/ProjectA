import React, { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [sentMessage, setSendmessage] = useState("");

  const handleSend = () => {
    setIsSending(true);

    const id = setTimeout(() => {
      setSendmessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);

    setTimerId(id);
  };
  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSending(false);
  };
  return (
    <div className="chatApp">
      <div className="chat">
        <h2>DM delay button</h2>
        <textarea
          placeholder="Enter text.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Enter delay time"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handleSend}>Sent with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel sending..</button>
        )}
        {sentMessage && (
          <div>
            <h3>message received</h3>
            <p>{sentMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
