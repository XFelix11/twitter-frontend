import Header from '@components/Header';
import Bottom from '@components/Bottom';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Outlet />
    <Bottom />
  </>
);

export default App;
