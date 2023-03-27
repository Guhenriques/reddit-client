import React from 'react';
import { useState, useEffect } from 'react';
import './Subreddit.css';
import '../Main/Articles/MainArticle.css'

const Aside = () => {
  const [subReddits, setSubReddits] = useState([]); 

  const fetchApi = () => {
    fetch('https://www.reddit.com/r/popular.json')
    .then((response) => response.json())
    .then((data) => setSubReddits(data));
  } 

  useEffect(() => {
    fetchApi()
  }, [])

// just to check the data path 
  console.log('subReddit:', subReddits?.data?.children)

  return (
    <div className='subreddit-container'>
      <h2>Subreddits</h2>
      <ul className='subreddit-list'>
        {subReddits?.data?.children.map(subReddit => ( 
          <li key={subReddit.data.id}><a href={`${subReddit.data.permalink}`}>{subReddit.data.subreddit}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Aside;

