import { Link } from 'react-router-dom';
import WavesImg from '../../assets/images/waves.png';
import Container from '../Container';

function Hero() {
  return (
    <div className="relative overflow-hidden w-full pt-[134px] pb-[50px] md:h-[700px] lg:h-[900px] px-5 xl:px-0">
      <img
        className="absolute top-20 lg:-top-20 bottom-0 right-0 z-[-1]"
        src={WavesImg}
        alt=""
      />
      <Container>
        <div className="w-full h-full flex justify-center flex-col ">
          <h1 className="text-[36px] md:text-6xl lg:text-7xl text-text-primary font-bold xl:w-8/12 leading-[110%] md:leading-[130%] lg:leading-[140%]">
            Empowering Financial Institutions with Integrated Solutions
          </h1>
          <p className="text-text-primary text-md md:text-lg md:w-6/12 pt-6">
            Streamlining structured products trading and wealth management
            through innovative modular software solutions
          </p>

          <div className="flex flex-col sm:flex-row pt-6 items-center gap-[14px] md:gap-6">
            <Link
              to={'/contact'}
              className="flex w-full md:w-auto pl-8 pr-1 py-1 rounded-full justify-between items-center common-gradient gap-6"
            >
              <div className="text-center w-[80%] md:w-auto md:text-left">
                <h4 className="text-md md:text-base font-bold">
                  Request a demo
                </h4>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.2929 18.2929C25.6834 17.9024 26.3166 17.9024 26.7071 18.2929L32.7071 24.2929C33.0976 24.6834 33.0976 25.3166 32.7071 25.7071L26.7071 31.7071C26.3166 32.0976 25.6834 32.0976 25.2929 31.7071C24.9024 31.3166 24.9024 30.6834 25.2929 30.2929L29.5858 26H18C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24H29.5858L25.2929 19.7071C24.9024 19.3166 24.9024 18.6834 25.2929 18.2929Z"
                  fill="#DA9169"
                />
              </svg>
            </Link>
            <Link
              to={'/solutions'}
              className="flex w-full md:w-auto border-bg-primary border-2 rounded-full pl-8 pr-1 py-[3px] items-center gap-8"
            >
              <div className="text-center w-[80%] md:w-auto md:text-left">
                <h4 className="text-md md:text-base text-bg-primary font-semibold">
                  Learn More
                </h4>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#DA9169" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.2929 18.2929C25.6834 17.9024 26.3166 17.9024 26.7071 18.2929L32.7071 24.2929C33.0976 24.6834 33.0976 25.3166 32.7071 25.7071L26.7071 31.7071C26.3166 32.0976 25.6834 32.0976 25.2929 31.7071C24.9024 31.3166 24.9024 30.6834 25.2929 30.2929L29.5858 26H18C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24H29.5858L25.2929 19.7071C24.9024 19.3166 24.9024 18.6834 25.2929 18.2929Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
