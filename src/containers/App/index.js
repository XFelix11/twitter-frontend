import Header from '@components/Header';
import Bottom from '@components/Bottom';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '@utils/context';
import { getUser } from '@services/login';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Toast } from 'antd-mobile';
import { useCurMenu } from '@utils/hooks';
import CreateButton from '@components/CreateButton';

import style from './index.module.scss';

const App = () => {
  const [store, setStore] = useAppContext();
  const nav = useNavigate();
  const location = useLocation();
  const menu = useCurMenu();
  useEffect(() => {
    const init = async() => {
      const userId = Cookies.get('userId');
      if (!userId) {
        Toast.show('Please login...');
        nav('/login');
        return;
      }
      if (store.user) {
        return;
      }
      const res = await getUser(userId);
      if (res.data) {
        setStore({
          user: res.data
        });
        if (location.pathname === '/login') {
          nav('/tweets');
        }
        return;
      }
      nav('/login');
    }
    init();
  }, [location.pathname]);

  const onClickCreateTweet = () => {
    nav('/createTweet');
  };

  return (
    <div className={style.container}>
      {!menu.hideHeader && <Header />}
      <Outlet />
      <Bottom />
      {!menu.hideHeader && <CreateButton onClick={onClickCreateTweet}/>}
    </div>
  );
}

export default App;
