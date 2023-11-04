import { CloseOutline } from 'antd-mobile-icons';
import twitterlogo from '../../assets/twitter-logo.svg';
import style from './index.module.css';

export default () => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} />
    <img src={twitterlogo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);
