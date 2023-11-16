import { useState } from'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import msgSvg from '@assets/msg.svg';
import starSvg from '@assets/star.svg';
import upSvg from '@assets/up.svg';
import cycleSvg from '@assets/cycle.svg';

import style from './index.module.scss';
import { parsePath } from 'react-router-dom';

const getBars = ({
  commentCount,
  likeCount,
}) => [
  {
    key: 'msg',
    icon: (
    <div>
      <img className={style.icon} src={msgSvg} alt="" />
      {commentCount > 0 && <span className={style.count}>{commentCount}</span>}
    </div>),
  },
  {
    key: 'cycle',
    icon: <img className={style.icon} src={cycleSvg} alt="" />,
  },
  {
    key: 'star',
    icon: (
    <div>
      <img className={style.icon} src={starSvg} alt="" />
      {likeCount > 0 && <span className={style.count}>{likeCount}</span>}
    </div>),
  },
  {
    key: 'up',
    icon: <img className={style.icon} src={upSvg} alt="" />,
  }
];

/*
bar with comment, forward, like, share 
*/
const Bar = ({
  likeCount,
  commentCount,
}) => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          likeCount,
          commentCount,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

Bar.propTypes = {
  commentCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default Bar;