import React, {useState, useEffect} from 'react';
import NewThread from './components/topic-page/NewThread';
import Thread from './components/topic-page/Thread';
import './components/topic-page/styles/App.css'

function App() {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('/api/threads/0')
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignContent: "center"
      }}>
        <NewThread/>
        {data && data.map((item) => (
          <Thread id={item.id} time={item.time} desc={item.desc} img={item.img} name={item.name} >
            </Thread>
        ))}
        
      </div>
    </div>
  );
}

export default App;
