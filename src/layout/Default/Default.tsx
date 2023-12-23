import { Link, Outlet } from 'react-router-dom';

const Default = () => {
  return (
    <div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Outlet />
    </div>
  );
};

export default Default;