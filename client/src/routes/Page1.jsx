import { io } from 'socket.io-client';
import { useEffect } from 'react';

export default function Page1() {
  useEffect(() => {
    const socket = io('http://localhost:8080', {
      autoConnect: false,
    });
    socket.on('connect', () => console.log(socket.id));
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000);
    });
    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <>
      <div className="background-brown width-100 height-100 display-flex justify-center align-center">
        <form className="modal-content">
          <label>
            Room Number
            <input id="room-number"></input>
          </label>
          <label>
            <input></input>
          </label>
        </form>
      </div>
    </>
  );
}
