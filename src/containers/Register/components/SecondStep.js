import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import { useState } from 'react';
import Footer from './Footer';

import style from '../index.module.scss';

// Second Step: input password;
const SecondStep = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);
  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };
  const onChangePwd = (val) => {
    setPassword(val);
  };
  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };
  return (
    <div className={style.SecondStep}>
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Username:
            <span>{userInfo.username}</span>
          </div>
          {userInfo.email && (
          <div className={style.showLabel}>
            Email:
            <span>{userInfo.email}</span>
          </div>
          )}
          {userInfo.tel && (
          <div className={style.showLabel}>
            Phone:
            <span>{userInfo.tel}</span>
          </div>
          )}
          <div className={style.showLabel}>
            Date of Birth:
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Please enter your password:</div>
        <Input className={style.input} type="password" onChange={onChangePwd} />
        <div className={style.label}>Please confirm your password:</div>
        <Input className={style.input} type="password" onChange={onChangeConfirmPwd} />
        {disabled && <div className={style.tip}>The two password entries must match.</div>}
      </div>
      <Footer disabled={disabled} label="Confirm" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

SecondStep.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default SecondStep;
