import { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@utils/context';
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

  const [, setStore] = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }

  }, [step]);

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

  return (
    <div>
      <Show visible={step === STEP.ONE}>
        <FirstStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO} isMount>
        <SecondStep
          userInfo={userInfo}
          goToFirstStepHandler={() => setStep(STEP.ONE)}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
