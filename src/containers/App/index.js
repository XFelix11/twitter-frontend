import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
