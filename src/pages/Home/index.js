import LoginProvider from '@pages/LoginProvider';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <LoginProvider>
      <Outlet />
    </LoginProvider>
  );
}

export default Home;
