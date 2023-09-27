import { io } from 'socket.io-client';

export default function Page1() {
  const socket = io.connect('http://localhost:8080');
  socket.on('connect', () => console.log(socket.id));
  socket.on('connect_error', () => {
    setTimeout(() => socket.connect(), 5000);
  });
  return (
    <>
      <a href="/">back home</a>
    </>
  );
}
