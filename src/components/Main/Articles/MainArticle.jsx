import React from 'react';
import './MainArticle.css';
import { useState, useEffect } from 'react';

// const Article = () => {
//   const [articles, setArticles] = useState([]);
//   const [subreddit, setSubReddit] = useState('webdev');

//   useEffect(() => {
//     fetch('https://www.reddit.com/r/webdev.json').then(res => {
//       if (res.status != 200) {
//         console.log('ERRORERROR');
//         return;
//       }

//       res.json().then(data => {
//         if (data != null) {
//           setArticles(data.data.children)
//         }
//       });
//     })

//   }, [subreddit])

function Article() {
  return (
    <div className='main-article'>
      <article>
        Title
        {/* {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        } */}
      </article>
    </div>
  )
}

export default Article;