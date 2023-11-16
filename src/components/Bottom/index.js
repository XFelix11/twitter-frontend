import { useState } from 'react';
import { TabBar } from 'antd-mobile';
import homeSvg from '@assets/home.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
import messageSvg from '@assets/message.svg';

import style from './index.module.scss';

const menus = [
  {
    key: 'home',
    title: 'Home',
    link: 'tweets',
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    link: '/',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: 'Tip',
    link: '/',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: 'Message',
    link: '/',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
];
/*
bottom bar
*/
const Bottom = () => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {menus.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
