import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => {
  console.log(props);
  return (< div >
    <h1>Hats Page{props.match.params.id}</h1>
  </div >)
};
const JacketsPage = (props) => {
  console.log(props);
  return (< div >
    <h1>Jackets Page{props.match.params.id}</h1>
  </div >)
};

const SneakersPage = (props) => {
  console.log(props);
  return (< div >
    <h1>Sneaker Page{props.match.params.id}</h1>
  </div >)
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/jackets" component={JacketsPage} />
        <Route exact path="/sneakers" component={SneakersPage} />
        <Route path="/hats/:id" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
