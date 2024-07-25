import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
//import map from './components/map';
import Gglmap from'./components/googlemap';
//
// const express = require('express');
// const { ObjectId } = require('mongodb');
// const { connectToDb, getDb } = require('./db');
// //init app & middleware
// const app = express();
// app.use(express.json());
//
export default function App() {
////
//db connection

// let db;
// connectToDb((err) => {
//   if (!err) {
//     app.listen(3000, () => {
//       console.log('App listening on port 3000');
//     });
//     db = getDb();
//   } else {
//     console.error('Failed to connect to the database:', err);
//   }
// });
// //
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          {/* <Route path='/map' component={map} /> */}
          <Route path='/Gglmap' component={Gglmap}/>
        </Switch>
      </Router>
    </>
  );
}


