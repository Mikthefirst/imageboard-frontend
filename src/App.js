import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api').
      then(response => response.json())
      .then(response=>(setData(response.message)))
  }, [])
  return (
    <div className="App">
          {
            data ? data : "Ничего"
          }
    </div>
  );
}

export default App;
