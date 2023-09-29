import { socket } from '../socket';
import { useEffect, useState } from 'react';
import JoinForm from '../components/Join-Form';

export default function Page1() {
  const [joined, setJoined] = useState(socket.connected);
  const [room, setRoom] = useState({ roomId: '', error: '' });

  function handleJoin() {
    if (!room.roomId) {
      setRoom({ ...room, error: 'Please give a room Id' });
      return;
    }
    if (room && !joined) {
      socket.connect();
    }
  }

  useEffect(() => {
    function onConnect() {
      setJoined(true);
      socket.emit('join', room.roomId);
    }

    socket.on('connect', onConnect);
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000);
    });
    return () => {
      socket.off('connect', onConnect);
    };
  }),
    [];

  return (
    <>
      {joined ? (
        <div className="background-brown width-100 height-100 display-flex">
          <div className="game-content flex-basis-80"></div>
        </div>
      ) : (
        <div className="background-brown width-100 height-100 display-flex justify-center align-center">
          <JoinForm
            room={room}
            handleJoin={handleJoin}
            setRoom={setRoom}
            error={room.error}
          />
        </div>
      )}
    </>
  );
}
