import { io } from "socket.io-client";


export const socket = io("http://localhost:3000", {
    transports: ['websocket'], // optional, can fix some polling issues
    withCredentials: true
  });