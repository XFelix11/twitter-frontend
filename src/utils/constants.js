import { matchPath } from 'react-router-dom';
import { UnorderedListOutline, UserCircleOutline } from 'antd-mobile-icons';

export const menus = [
  {
    key: 'tweet',
    title: 'tweet',
    hideHeader: true,
    link: '/tweet/:id',
  },
  {
    key: 'home',
    title: 'Homepage',
    link: '/',
    isMenu: true,
    icon: <UnorderedListOutline />,
  },
  {
    key: 'my',
    link: '/my',
    title: 'My Account',
    isMenu: true,
    icon: <UserCircleOutline />,
  },
/*   {
    key: 'tip',
    title: 'Notifications',
    link: '/tip',
    isMenu: true,
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  }, */
/*   {
    key: 'message',
    title: 'Messages',
    link: '/message',
    isMenu: true,
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  }, */
  {
    key: 'comment',
    link: '/comment/:id',
    hideHeader: true,
  },
  {
    key: 'createTweet',
    link: '/createTweet',
    hideHeader: true,
  },
  {
    key: 'follow',
    link: '/follow',
    hideHeader: true,
  },
  {
    key: 'editUser',
    title: '编辑个人信息',
    link: '/editUser',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

// matchPath('/comment/:id', '/comment/1') => true
export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));


export const includeMenu = (link) => menus.some((item) => item.link === link);
