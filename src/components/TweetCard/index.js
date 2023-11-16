import { useState, useEffect } from'react';

import style from './index.module.scss';

/*
Tweets card
*/
const TweetCard = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.avatarContainer}>
        <img src={tweet.user.avatar_url} alt="avatar" className={style.avatar} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.header}>
          <span className={style.nickName}>
            {tweet.user.nickname}
          </span>
          @
          <span className={style.username}>{tweet.user.username}</span>
          &nbsp;·&nbsp;
          {moment(tweet.created_at).format('MM mins ago')}
        </div>
        <div className={style.content}>
          {tweet.content}
        </div>
        <div className={style.photo}>
          <ImageCard imgs={tweet.photo_urls} />
        </div>
        <div className={style.bar}>
          <Bar commentCount={tweet.comments_count} likeCount={tweet.likes_count} />
        </div>
      </div>
    </div>
  )
}

export default TweetCard;
