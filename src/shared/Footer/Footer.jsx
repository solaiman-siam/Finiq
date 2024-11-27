import { FaLinkedinIn } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/footer-logo.png';
import Container from '../../components/Container';

import Wave4 from '../../assets/images/wave4.png';

function Footer() {
  return (
    <div className="px-5 xl:px-0 relative overflow-hidden bg-[#0F0500] z-[1]">
      <Container>
        <div className="">
          <div className="flex flex-col sm:flex-row border-b border-white/10 justify-center gap-20 lg:gap-60 py-10">
            <div className="flex sm:flex-col space-y-4 w-full sm:w-auto">
              <div className="space-y-4 w-5/12 sm:w-full">
                <div>
                  <img className="w-20 sm:w-36" src={Logo} alt="" />
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    to={'/'}
                    className="bg-[#251B16] text-white p-3 rounded-full"
                  >
                    <FaLinkedinIn size={22} />
                  </Link>
                  <Link
                    to={'/'}
                    className="bg-[#251B16] text-white p-3 rounded-full"
                  >
                    <TfiEmail size={20} />
                  </Link>
                </div>
              </div>
              <div className="pt-2 w-7/12 sm:w-full flex justify-end sm:justify-start">
                <Link to={'/contact'}>
                  <button className="text-sm text-white bg-bg-primary font-bold font-ubuntu px-[30px] xl:px-12 py-4 rounded-full ">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-between gap-x-[58px] sm:gap-x-[170px]">
              <div className="text-white flex flex-col text-lg space-y-6">
                <Link to={'/'}>
                  <h4 className="text-lg">Overview</h4>
                </Link>
                <Link to={'/'}>
                  <h4 className="text-lg">Core Framework</h4>
                </Link>
                <Link to={'/'}>
                  <h4 className="text-lg">Our Partners</h4>
                </Link>
                <Link to={'/'}>
                  <h4 className="text-lg">About Us</h4>
                </Link>
              </div>
              <div className="text-white text-lg flex flex-col space-y-6">
                <Link to={'/'}>
                  <h4>Showcase</h4>
                </Link>
                <Link to={'/'}>
                  <h4>Solutions</h4>
                </Link>
                <Link to={'/'}>
                  <h4>News</h4>
                </Link>
                <Link to={'/'}>
                  <h4>Locations</h4>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-white py-6 text-center ">
            2024 © FinIQ Consulting Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </Container>
      <img
        className="absolute scale-[300%] sm:scale-125 bottom-40 sm:bottom-0 object-cover right-0 z-[-1]"
        src={Wave4}
        alt=""
      />
    </div>
  );
}

export default Footer;
