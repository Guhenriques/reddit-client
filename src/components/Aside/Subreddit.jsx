import React from 'react';
import './Subreddit.css';
import '../Main/Articles/MainArticle.css'

const Aside = () => {
  const subreddits = [
    "askreddit",
    "worldnew",
    "videos",
    "funny",
    "todayilearned",
    "pics",
    "gaming",
    "movies",
    "news",
    "gifs",
    "aww",
    "mildlyinteresting",
    "showerthoughts",
    "television",
    "jokes",
    "science",
    "soccer",
    "internetisbeautiful",
    "dataisbeautiful",
  ]

  return (
    <div className='subreddits-container'>
      <h2>Subreddits</h2>
      <ul className='subreddits-lists'>
        {subreddits.map(subreddit => (
          <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
        ))}
      </ul>

    </div>
  )
}

export default Aside;