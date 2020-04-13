import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import {Route} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';


const HatsPage = ()=> (

  <div>
    <h1>Hats Page</h1>
  </div>
);

/* this route takes these three options, when exact is not give a value it means that it's true by default */

// The switch allows to follow a pattern where we know that as long as one route matches then that's the only thing we're going to render.
  
function App() {
  return (
    <BrowserRouter>
    <div>
      
     <Route path="/" component={Homepage}/>
     <Route path="/hats" component={HatsPage} />

    </div>
    </BrowserRouter>
  );
}

export default App;
