import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import { Home, About, Contact, Navigation } from './components';



const App = () => (
  <div>
    <Navigation />
 
<BrowserRouter>


<Route exact path='/' components={Home} />
<Route path='/' components={About} />
<Route path='/' components={Contact} />
</BrowserRouter>

</div>
);
export default App;
