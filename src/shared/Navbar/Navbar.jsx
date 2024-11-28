import { useState } from 'react';
import { HiBars3BottomRight, HiMiniXMark } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../components/Container';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="500"
      className="absolute top-0 left-0 w-full mx-auto z-50"
    >
      <Container>
        <div className="flex items-center mx-5 mx:px-0 lg:items-top border-b border-[#DCDCDC] justify-between">
          <div className="py-6">
            <Link to={'/'}>
              <img className="w-[100px] lg:w-40" src="/logo.png" alt="" />
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden cursor-pointer"
          >
            {isOpen ? (
              <HiMiniXMark className="text-[30px]" />
            ) : (
              <HiBars3BottomRight className="text-[30px]" />
            )}
          </div>

          <div
            className={`flex flex-col lg:flex-row items-top lg:gap-14 lg:h-full absolute top-[100%] w-full h-auto pt-[30px] px-5 bg-white lg:static lg:w-auto lg:py-0 lg:bg-transparent lg:px-0 duration-300 ${
              isOpen ? 'left-0' : '-left-[100%]'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-top gap-y-6 lg:gap-2 lg:h-full text-text-primary">
              <NavLink
                to={'/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-bg-primary lg:border-t-4 lg:text-bg-primary lg:border-bg-primary'
                    : 'lg:border-t-4 lg:text-bg-white lg:border-transparent hover:text-bg-primary lg:hover:border-bg-primary duration-300'
                }
              >
                <h4 className="px-4 lg:py-10  h-full">Home</h4>
              </NavLink>
              <NavLink
                to={'/solutions'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-bg-primary lg:border-t-4 lg:text-bg-primary lg:border-bg-primary'
                    : 'lg:border-t-4 lg:text-bg-white lg:border-transparent hover:text-bg-primary lg:hover:border-bg-primary duration-300'
                }
              >
                <h4 className="px-4 lg:py-10   h-full">Solutions</h4>
              </NavLink>
              <NavLink
                to={'/showcases'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-bg-primary lg:border-t-4 lg:text-bg-primary lg:border-bg-primary'
                    : 'lg:border-t-4 lg:text-bg-white lg:border-transparent hover:text-bg-primary lg:hover:border-bg-primary duration-300'
                }
              >
                <h4 className="px-4 lg:py-10 h-full">Showcase</h4>
              </NavLink>
            </div>
            <div>
              <Link to={'/contact'} onClick={() => setIsOpen(false)}>
                <h4 className="px-8 my-[26px] py-4 rounded-full bg-bg-primary border-2 border-transparent text-white text-center text-sm lg:text-base font-bold hover:text-bg-primary hover:bg-white hover:border-bg-primary duration-300">
                  Contact Us
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
