import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
//import { Main } from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/Main/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>
 
        <Header />


        {/*<Route path='/' component={Main} />*/}
        {/* <!---<Route path='/subbredits:/' /> */}
        <Routes>
        <Route element={PageNotFound} />
        </Routes>
        <Footer />
        </Router>

      <div className='Main'>
        <div className='Article'>
        </div>

        <div className='Aside'>
        </div>
      </div>
      
      <div className='Footer'>

      </div>
    </div>
  );
}

export default App;
