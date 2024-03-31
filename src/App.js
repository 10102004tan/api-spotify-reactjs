import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import MusicApp from './components/MusicApp/MusicApp'

function App() {
  const clientId = 'f4c5ede9aac340c7ae69e59523cec0aa';
  const clientSecret = '5ba01739755c4b59b03848e1f5275622';
  const [songData, setSongData] = useState([]);
  const [token,setToken] = useState("");
  const token2 = 'BQBKte2LcJDm00-HoAL32uBkx0rmSRIayTA4d7rvawagU4wD7n_f43MIzJqc5GFfg47fqHvMtXxqQUkrCBaG5FFfYtvidUnzgEAYW0wqs5nGJmb-i9Oi_ngQhKrvwEPRtpfNtoho5TXzMUEypnflNpK0EfsOIAjyenagkeDcMu1VjZympcm7w_EobqaU8nj1CSGIAFR7GQPPCSMVfsiTmj-fatdF-ObiXutIdWsbQsHnzVP7jPEe2jHPYznh231ZYUI1oTdgilTHqzv9mC_etD9n'
  const [q,setQ] = useState('mck')
  

  useEffect(() => {
    fetch(
      "https://accounts.spotify.com/api/token",  
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
      }
      )
      .then((response) => response.json())
      .then((data) => {
        setToken(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);

  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${q}&type=track&limit=10`,  
      {
        headers: {
          Authorization: `Bearer ${token2}`,
        },
      }
      )
      .then((response) => response.json())
      .then((data) => {
        setSongData(data.tracks.items)
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);

  return (
    <div>
      <MusicApp songData={songData}/>
    </div>
  );
}




export default App;
