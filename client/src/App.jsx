import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <div>
        <label for='room-number'> Room number
          <input type='text'  id='room-number' name='room-number'></input>
        </label>
      </div>
      <h1>{serverData}</h1>
    </>
  );
}
