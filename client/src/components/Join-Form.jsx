export default function JoinForm({ room, handleJoin, setRoom, error }) {
  return (
    <form className="room-input-card text-align-center">
      <label className="font-size-large">
        Room Number
        <input
          id="room-number"
          className="login-input"
          value={room.roomId}
          onChange={(e) =>
            setRoom({ ...room, roomId: e.target.value })
          }></input>
        <div className="color-red">{error}</div>
      </label>
      <div className="display-flex justify-center">
        <button type="button" className="join-button" onClick={handleJoin}>
          Join
        </button>
      </div>
    </form>
  );
}
