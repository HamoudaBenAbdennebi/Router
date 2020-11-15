import React,{useState} from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Desc from './component/comp/Desc';
import Main from './component/comp/Main';
import Header from './component/Header'
const App = () => {

  return (
    <>
    <Header />
      <div className="links">
        <Link to="/">MOVIES</Link>
        <Link to="/desc">DESCRIPTION</Link>
      </div>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/desc" component={() => <Desc para="Hacker' 2016 (theatrically released as Anonymous[1]) is a 2016 crime thriller, directed by Akan Satayev, about a group of young hackers who get involved with an online crime group and black market dealers across Toronto, Hong Kong, New York and Bangkok.[2] The cast consisted of Callan McAuliffe, Lorraine Nicholson, Daniel Eric Gold, and Clifton Collins Jr. The story was loosely based on real events. The screenplay was written by Timur Zhaxylykov and Sanzhar Sultan, who also produced in association with Brillstein Entertainment Partners.[3] The film had a limited release in the US (under the title Anonymous), on December 2nd, 2016.[4] Following that, Sony Pictures released the film on home entertainment." />} />
      </div>
    </>
  );
}

export default App;
