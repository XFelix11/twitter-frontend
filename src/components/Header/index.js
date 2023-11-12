import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import twitterlogo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

const Header = ({
  onClickClose,
}) => (
  <div className={style.header}>
    {onClickClose && <CloseOutline className={style.closeIcon} onClick={onClickClose} />}
    <img src={twitterlogo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func,
};

Header.defaultProps = {
  onClickClose: null,
};

export default Header;
