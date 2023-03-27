import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { Article, Comments } from './components/Main/Articles/MainArticle';
import Aside from './components/Aside/Subreddit';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/Main/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <header className='header-container'>
          <Header />
        </header>
        <main className='main-container'>
          <article className='main-content'>
            <Article />
          </article>
          <aside className='main-subreddits'>
            <Aside />
          </aside>
        </main>


        <Footer />

        <Routes>
          <Route element={PageNotFound} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
