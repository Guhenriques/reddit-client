import React, { useState, useEffect } from 'react';
import './MainArticle.css';

export const Article = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchApi = async () => {
    const response = await fetch('https://www.reddit.com/r/Home.json');
    const data = await response.json();
    const articleData = data.data.children.map(async (post) => {
      const permalink = post.data.permalink;
      const commentsResponse = await fetch(`https://www.reddit.com${permalink}.json`);
      const commentsData = await commentsResponse.json();
      const comments = commentsData[1].data.children.map(comment => comment.data);
      return {
        post: post.data,
        comments: comments
      };
    });
    const articles = await Promise.all(articleData);
    setArticles(articles);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  const handleClick = (article) => {
    setSelectedArticle(article);
  }

  return (
    <div className='main-articles'>
      {articles.map(article => (
        <article key={article.post.id} id={`${article.post.name}`} className='cards' onClick={() => handleClick(article)}>
          <div className='post-info-top'>
            <a href={`${article.post.subreddit}`}>
              <h4 className='subreddit-category'>r/{article.post.subreddit}</h4>
            </a>
            <a href={`${article.post.permalink}`}>
              <h3 className='title'>{article.post.title}</h3>
            </a>
            <p className='author'>
              By: {article.post.author}
            </p>
          </div>
          <div className='post-info-bottom'>
            <span className='time-created'>
            </span>
          </div>
        </article>
      ))}
      {selectedArticle && (
        <div className='selected-article'>
          <h3>{selectedArticle.post.title}</h3>
          <p>{selectedArticle.post.selftext}</p>
          {selectedArticle.comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}