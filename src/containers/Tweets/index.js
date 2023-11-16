import { useState, useEffect } from 'react';

import style from './index.module.scss';
/*
tweets on homepage
*/
const Tweets = () => {
  const [data, setDate] = useState();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      <TweetCard />
    </div>
  );
};

export default Tweets;
