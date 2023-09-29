// src/RealTimeComponent.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server's URL

function RealTimeComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Add your real-time event listeners and logic here
    // For example:
    socket.on('message', (data) => {
      setMessage(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time App</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default RealTimeComponent;
