import { CloseOutline } from 'antd-mobile-icons';
import { useAppContext } from '@utils/context';
import twitterlogo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  return (
    <div className={style.header}>
      {store.closeHeaderHandler && (
      <CloseOutline
        className={style.closeIcon}
        onClick={store.closeHeaderHandler}
      />
      )}
      <img src={twitterlogo} alt="twitter-logo" className={style.twitterLogo} />
    </div>
  );
};

export default Header;
