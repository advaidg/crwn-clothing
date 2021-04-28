import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch,Link} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component.jsx"
import './App.css';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  exact path='/shop' component={ShopPage} />
      </Switch>

    
    </div>
  );
}

export default App;
