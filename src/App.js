 
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <Navbar />

    <div className="content">
     <Home />
    </div>

      {/* <div className="content">
        <h1>{title}</h1>

        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ 'Hello, ninjas' }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div> */}
    </div>
  );
}

export default App;
