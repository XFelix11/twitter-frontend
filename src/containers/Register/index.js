import { useState } from 'react';
import { Toast } from 'antd-mobile';
// import Header from '@components/Header';
import Show from '@components/Show';
import { registerUser } from '@services/register';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

// Step Sign
const STEP = {
  ONE: 1,
  TWO: 2,
};

// register page

const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('Register successfully!');
      return;
    }
    Toast.show('Register failed, please try again :(');
  };

  /*   const onClickClose = () => {
      setStep(STEP.ONE);
    }; */

  return (
    <div>
      <Show visible={step === STEP.ONE}>
        <FirstStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO}>
        <SecondStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
