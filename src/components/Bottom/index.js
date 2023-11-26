/* import { useEffect } from 'react'; */
import { TabBar } from 'antd-mobile';
/* import { useAppContext } from '@utils/context'; */
import { useGoTo, useCurMenu } from '@utils/hooks';
import { menus } from '@utils/constants';

import style from './index.module.scss';

/*
bottom bar
*/
const Bottom = () => {
/*   const [activeKey, setActiveKey] = useState(); */
/*   const [, setStore] = useAppContext(); */
  const go = useGoTo();
  const menu = useCurMenu();

/*   useEffect(() => {
    if (menu) {
      setStore({
        title: menu.title,
      });
    }
  }, []); */

  const onChangeTabItem = (key) => {
/*     const mu = getMenuByKey(key);
    setStore({
      title: mu.title,
    }); */
    go(key);
  };

  if (menu.hideHeader) {
    return null;
  }

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          item.isMenu && <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
