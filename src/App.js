import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to my new Blog";
  const likes = 50;
  // const person = {name: "adam", age: 13};
  const link = "https://jadtaha.com";

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
        <h1>{ title }</h1>
        <p> Liked {likes} times</p>

        <p>{10}</p>
        <p>{"Hello Ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()}</p>

        <a href={link}>Google Site</a>

      </div>
    </div>
  );
}

export default App;
