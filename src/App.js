 
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
function App() {
  return (
    <Router>  
     <div className="App">
    <Navbar />
    <div className="content">
    <Switch>
      <Route exact path="/"> 
          <Home />
      </Route>

      <Route path="/create"> 
          <Create />
            </Route> 
            
      <Route path="/blogs/:id"> 
         <BlogDetail></BlogDetail>
      </Route>  
    </Switch>
    </div>

{/* Lesson 7 */}
      {/* <div className="content">
        <h1>{title}</h1>

        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ 'Hello, ninjas' }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div> */}
    </div>   
    </Router>

  );
}

export default App;
