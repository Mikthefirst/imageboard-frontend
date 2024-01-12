import React, {useState, useEffect} from 'react';
import NewPostForm from './components/topic-page/NewPostForm';
function App() {
  //const [data, setData] = useState(null);
  /*useEffect(() => {
    fetch('/api').
      then(response => response.json())
      .then(response => (setData(response.message)));
  }, []);*/
  return (
    <div className="App">
      <NewPostForm threadid={1}></NewPostForm>
    </div>
  );
}

export default App;
