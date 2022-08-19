import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './views/Login';
import Chat from './views/Chat';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login socket={socket} />} />
      <Route path='/chat' element={<Chat socket={socket} />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
