import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from '../index.module.scss';

// 底部的操作栏 Bottom Action Bar
const Footer = ({
  onClickNextStep,
  disabled,
}) => (
  <div className={style.footer}>
    <Button
      className={disabled ? style.footerButtonDisabled : style.footerButton}
      onClick={onClickNextStep}
    >
      Next
    </Button>
  </div>
);

Footer.propTypes = {
  onClickNextStep: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Footer;
