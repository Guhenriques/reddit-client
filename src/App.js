import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Main/Articles/MainArticle';
import Aside from './components/Aside/Subreddit';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/Main/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Article />
        <Aside />

        <Footer />

        <Routes>
          <Route element={PageNotFound} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
