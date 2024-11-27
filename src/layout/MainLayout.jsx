import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

function MainLayout() {
  const handelBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-poppins relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <div
        onClick={handelBackToTop}
        className="cursor-pointer absolute z-[9999999] bottom-[450px] sm:bottom-[290px] md:bottom-[270px] lg:bottom-[270px] right-0 xl:right-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
        >
          <g filter="url(#filter0_d_344_203)">
            <circle cx="80" cy="76" r="30" fill="white" />
          </g>
          <path
            d="M79.8955 70L88.791 79.9764L87.5456 81.373L79.8955 72.7934L72.2454 81.373L71 79.9764L79.8955 70Z"
            fill="#E39870"
          />
          <defs>
            <filter
              id="filter0_d_344_203"
              x="0"
              y="0"
              width="160"
              height="160"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_344_203"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_344_203"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default MainLayout;
