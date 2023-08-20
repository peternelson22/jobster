import Wrapper from '../assets/wrappers/BigSidebar';
import { useUserSelector } from '../features/user/userSlice';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { isSidebarOpen } = useUserSelector();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
