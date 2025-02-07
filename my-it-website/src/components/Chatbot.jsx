import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // Chat messages history
    const [input, setInput] = useState("");       // User input

    // Get the Access Token & API URL from environment variables
    const ACCESS_TOKEN = import.meta.env.VITE_CHATBOT_ACCESS_TOKEN;
    const API_URL = import.meta.env.VITE_CHATBOT_API_URL;

    // Function to send a message to the chatbot API
    const sendMessage = async () => {
        if (!input.trim()) return; // Prevent empty messages

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages); // Add user message to chat history

        try {
            const response = await axios.post(
                API_URL,
                { message: input }, // Adjust payload based on API documentation
                {
                    headers: {
                        "Authorization": `Bearer ${ACCESS_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Extract the chatbot's response (adjust if the API returns data differently)
            const botReply = response.data.reply || "Sorry, no response from the bot.";
            setMessages([...updatedMessages, { role: "bot", content: botReply }]);
        } catch (error) {
            console.error("Chatbot API error:", error);
            setMessages([...updatedMessages, { role: "bot", content: "Oops! Something went wrong." }]);
        }

        setInput(""); // Clear input field
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.role === "user" ? "user" : "bot"}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
