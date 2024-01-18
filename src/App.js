import React, {useState, useEffect} from 'react';
import NewThread from './components/topic-page/NewThread';
import Thread from './components/topic-page/Thread';
//import Post from './components/topic-page/Post'
//import NewPostForm from './components/topic-page/NewPostForm'

function App() {
  const [data, setData] = useState(null);
  //const [postData, setPostData] = useState(null);
 

  useEffect(() => {
    fetch('/api/threads/0')
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

  /*useEffect(() => {
    if (isThreadClicked && currentThread) {
      fetch(`localhost:3001/api/posts/${currentThread}`)
        .then(response => response.json())
        .then(response => setPostData(response));
    }
  }, [isThreadClicked, currentThread]);

  const ThreadClick = (id) => {
    setCurrentThread(id);
    setThreadClick(!isThreadClicked);
    console.log('click:', id)
  }*/
   useEffect(() => {
    fetch('/api/post/1')
      .then(response => response.json())
      .then(response => console.log(response));
  }, []);
  return (
    <div className="App">
      <NewThread></NewThread>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignContent: "center"
      }}>
        {data && data.map((item) => (
          <Thread id={item.id} time={item.time} desc={item.desc} img={item.img} name={item.name} >
            </Thread>
        ))}
        
      </div>
    </div>
  );
}

export default App;
