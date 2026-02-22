import { useState } from "react";
import chatImg from "../../src/assets/chatbot-icon.png";
import { ChatBot } from "../../dist/index.js";

function App() {
  const [apiKey, setApiKey] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Groq Chat Test</h1>

      {!showChat ? (
        <div>
          <h2>Enter your Groq API Key to test:</h2>
          <input
            type="password"
            placeholder="Enter your Groq API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "300px",
              fontSize: "14px",
            }}
          />
          <br />
          <button
            onClick={() => setShowChat(true)}
            disabled={!apiKey.trim()}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: apiKey.trim() ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: apiKey.trim() ? "pointer" : "not-allowed",
            }}
          >
            Start Chat
          </button>
          <p style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
            Note: Make sure you have Tailwind CSS installed in your project for
            proper styling.
          </p>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setShowChat(false)}
            style={{
              padding: "5px 10px",
              marginBottom: "20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <ChatBot
            apiKey={apiKey}
            systemPrompt="You are a helpful assistant."
            assistantFirstMessage="Hello! How can I help you today?"
          />
        </div>
      )}
    </div>
  );
}

export default App;
