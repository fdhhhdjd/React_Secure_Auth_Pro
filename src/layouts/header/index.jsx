import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LockLogo from '@/assets/images/lock.gif';
import User from '@/assets/images/user.jpg';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import { logoutUser } from '@/features/users/userThunk';

import { links, RoutePaths } from '@/configs';
import { Redirect } from '@/utils';

const Header = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const Navigate = useNavigate();
  const handleLogOut = async () => {
    setDropdownOpen(false);
    const resultRedux = await dispatch(logoutUser());
    Redirect(resultRedux);
  };

  return (
    <React.Fragment>
      <header className='bg-orange-400 shadow-md'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          {/* Logo */}
          <div className='text-xl font-bold text-black-500'>
            <img src={LockLogo} alt='' className='rounded-full h-11 w-11' />
          </div>

          {/* Navigation Links */}
          <nav className='hidden md:flex space-x-4'>
            {links.map(link => (
              <ConditionalLink
                key={link.to}
                to={link.to}
                className='text-black-600 hover:text-black-800'
                useNavLink
              >
                {link.label}
              </ConditionalLink>
            ))}
          </nav>

          {/* Profile Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='inline-flex justify-center items-center px-4 py-2  border-black-300 rounded-md shadow-sm text-sm font-medium text-black-700 hover:bg-black-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <img src={User} alt='user' className='rounded-full h-11 w-11' />
            </button>

            {dropdownOpen && (
              <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <button
                    className='block px-4 py-2 text-sm text-black-700 hover:bg-black-100'
                    onClick={() => Navigate(RoutePaths.USER.CHANGE_PASSWORD)}
                  >
                    Change Password
                  </button>
                </div>
                <div className='py-1'>
                  <button
                    className='block px-4 py-2 text-sm text-black-700 hover:bg-black-100'
                    onClick={() => handleLogOut()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
