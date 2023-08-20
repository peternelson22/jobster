import Wrapper from '../assets/wrappers/Navbar';
import { FaUserCircle, FaCaretDown, FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  logoutUser,
  toggleSidebar,
  useUserSelector,
} from '../features/user/userSlice';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const dispatch = useDispatch();
  const { user } = useUserSelector();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />

          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              onClick={() => dispatch(logoutUser(`Goodbye ${user?.name}`))}
              className='dropdown-btn'
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
