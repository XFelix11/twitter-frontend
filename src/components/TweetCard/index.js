
import moment from 'moment';
import Bar from '@components/Bar';
import ImageCard from '@components/ImageCard';
import { useGoTo } from '@utils/hooks';
import { OBJECT_KEYS } from '@components/Bar/constants';
import PropTypes from 'prop-types';

import style from './index.module.scss';

const tweet = {
  id: 1, // 推文id
  user: {
    id: 2, // 发送该推文的用户id
    username: 'EpikGaming', // 发送该推文的用户名
    nickname: 'EpikGamingT3', // 发送该推文的用户昵称
    avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该推文的用户头像地址
  }, // 发送该推文的用户信息
  comments: [
    {
      id: 1, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: 'EpikGamingT3', // 发送该评论的用户昵称
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 10, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
    {
      id: 2, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: 'EpikGamingT3', // 发送该评论的用户昵称
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 10, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
  ], // 该推文的评论集
  created_at: '2021-12-18T07:38:01.699129Z', // 该推文的创建时间
  content: 'Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // 该推文的文本内容
  likes: [], // 哪些用户点赞了这条推文
  likes_count: 10, // 该推文的点赞数
  comments_count: 122, // 该推文的评论数
  has_liked: false, // 当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  photo_urls: ['https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuKXKJeqzfVVrwwS6IZ0NfZUwaxMoXiJkeya7tUM04zl3BJtbbbx2rThPKxwpXeufwbc&usqp=CAU',
    'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    'https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
  ], // 该推文的图片地址集
};

/* const tweet = {
  "id": 1, //推文id
  "user": {
  "id": 2, //发送该推文的用户id
  "username": "EpikGaming", //发送该推文的用户名
  "nickname": "EpikGamingT3", //发送该推文的用户昵称
  "avatar_url": "https://s2.loli.net/2023/11/18/fSQqy8wvBrAY1Nk.png" //发送该推文的用户头像地址
  }, //发送该推文的用户信息
  "comments": [
  {
  "id": 1, //评论id
  "tweet_id": 1, //评论的推文id
  "user": {
  "id": 1, //发送该评论的用户id
  "username": "admin", //发送该评论的用户名
  "nickname": null, //发送该评论的用户昵称
  "avatar_url": null //发送该评论的用户头像地址
  }, //发送该评论的用户信息
  "content": "Test!", //该评论的文本内容
  "created_at": "2021-12-22T15:03:52.662052Z", //该评论的创建时间
  "likes_count": 0, //该评论点赞数
  "has_liked": false //当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
  }
  ], //该推文的评论集
  "created_at": "2021-12-18T07:38:01.699129Z", //该推文的创建时间
  "content": "This is a test, This is a test, This is a test, This is a test, This is a test.", //该推文的文本内容
  "likes": [], //哪些用户点赞了这条推文
  "likes_count": 12, //该推文的点赞数
  "comments_count": 1, //该推文的评论数
  "has_liked": false, //当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  "photo_urls": ['https://s2.loli.net/2023/11/18/Q4YyWfSLNB8J1e5.png',
  'https://s2.loli.net/2023/11/18/WqfUVCbxQT4XReS.png',
  'https://s2.loli.net/2023/11/18/DAIeY7VsPZwG3O2.png',
  'https://s2.loli.net/2023/11/18/VvakuLdPCFWq1Jg.png'
  ] //该推文的图片地址集
  }
 */
/*
Tweets card
*/
const TweetCard = ({
  dataSource,
}) => {
  const go = useGoTo();
  return (
    <div className={style.container }>
      <div className={style.avatarContainer}>
        <img src={dataSource.user.avatar_url} alt="avatar" className={style.avatar} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.header}>
          <span className={style.nickName}>
            {dataSource.user.nickname}
          </span>
          @
          <span className={style.username}>{dataSource.user.username}</span>
          &nbsp;·&nbsp;
          {moment(dataSource.created_at).format('YYYY/MM/DD HH:mm')}
        </div>
        <div className={style.content} onClick={() => go('tweet', { id: dataSource.id })}>
          {dataSource.content}
        </div>
        <div className={style.photo}>
          <ImageCard
            imgs={dataSource.photo_urls}
            commentCount={dataSource.comments_count}
            likeCount={dataSource.likes_count}
          />
        </div>
        <div className={style.bar}>
          <Bar
            id={dataSource.id}
            commentCount={dataSource.comments_count}
            likeCount={dataSource.likes_count}
            type={OBJECT_KEYS.TWEET}
          />
        </div>
      </div>
    </div>
  );
};

TweetCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataSource: PropTypes.object.isRequired,
};

export default TweetCard;
