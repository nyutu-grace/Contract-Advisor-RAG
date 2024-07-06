import React, { useState } from "react";

import Message from "../components/Message";
import Svg from "../components/Svg";


function Chat() {
  // this function opens the chat
  function openChart() {
    document.getElementById("assistant-chat").classList.add("show");
    document.getElementById("assistant-chat").classList.remove("hide");
  }

  // this function opens the chat
  function closeChart() {
    document.getElementById("assistant-chat").classList.add("hide");
    document.getElementById("assistant-chat").classList.remove("show");
  }

  function chat_scroll_up() {
    let elem = document.querySelector(".start-chat");
    setTimeout(() => {
      elem.scrollTo({
        top: elem.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }

  const [chatMessages, setchatMessages] = useState([
    {
      position: "left_bubble",
      message: "Ask me any question about your document? ",
    },
  ]);

  function askAI() {
    var prompt_input = document.getElementById("chat-input");
    var prompt = prompt_input.value;
    console.log(prompt);
    if (prompt.replaceAll(" ", "") === "") {
      return;
    }
    prompt_input.value = "";

    const data = {
      chatHistory: JSON.stringify(chatMessages),
      prompt: prompt,
    };

    fetch("http://127.0.0.1:8080/ask_ai", {
      method: "POST",
      body: JSON.stringify(data), // Convert data to JSON
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    })
      .then((response) => response.json())
      .then((resData) => {
        const messages = [
          ...chatMessages,
          {
            position: "right_bubble",
            message: prompt,
          },
          {
            position: "left_bubble",
            message: resData.result,
          },
        ];
        setchatMessages(messages);
        chat_scroll_up()
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <section id="about" className="py-10 text-white">
        <div className="mt-10">
          <h3 className="text-4xl font-semibold text-justify leading-7 w-11/12 mx-auto">
          <span className="text-cyan-600">Contract Advisor RAG</span>
          </h3>
        </div>
        
    </section>
      
      <div>
        <div id="assistant-chat" className="hide ai_chart">
          <div className="header-chat">
            <div className="head-home">
              <div className="info-avatar">
                <Svg />
              </div>
              <p>
                <span className="assistant-name"> Assistant</span>
                <br />
                <small>Online</small>
              </p>
            </div>
          </div>

          <div className="start-chat">
            <div className="assistant-chat-body">
              {chatMessages.map((chatMessage, key) => (
                <Message
                  key={key}
                  position={chatMessage.position}
                  message={chatMessage.message}
                />
              ))}
            </div>
            <div className="blanter-msg">
              <input
                type="text"
                id="chat-input"
                placeholder="What can i help you with..."
                maxLength="400"
              />
              <a
                onClick={askAI}
                
                id="send-it"
                className="send_it"
              >
                <svg viewBox="0 0 448 448">
                  <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
                </svg>
              </a>
            </div>
          </div>
          <a className="close-chat" href="#close" onClick={closeChart}>
            &times;
          </a>
        </div>
        <a
          onClick={openChart}
          className="blantershow-chat"
          
          title="Show Chat"
        >
          <Svg />
          Chat with your legal document
        </a>
      </div>
      
    </div>
  );
}

export default Chat;