import { Link } from 'react-router-dom';

const ShowcaseThrice = ({ data }) => {
  // const [activeArticle, setActiveArticle] = useState(false);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="1000"
      className="w-full sm:w-[32%] flex flex-col bg-white p-5 rounded-[10px]"
    >
      <div className="w-full h-[270px] group overflow-hidden rounded-[10px]">
        <img
          src={data.imgUrl}
          alt="Showcase Item Image"
          className="w-full h-full rounded-[10px] object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="mb-5">
        <h3 className="text-bg-primary text-[28px] font-bold font-poppins mt-5">
          {data.topTitle}
        </h3>

        <h5 className="text-black text-sm font-bold font-poppins leading-[150%] mt-[10px]">
          {data.info}
        </h5>

        <p className="text-black text-sm font-poppins leading-[150%] mt-[10px] line-clamp-4 h-0 lg:h-auto">
          {data.description}
        </p>
      </div>

      {data.link && (
        <Link
          to={data.link}
          className="flex w-full max-w-fit md:w-auto border-bg-primary border-2 rounded-full pl-5 pr-3 py-0 sm:pl-8 sm:pr-1 sm:py-[3px] items-center gap-8 group hover:bg-bg-primary hover:border-transparent duration-300"
        >
          <div className="text-center w-[80%] md:w-auto md:text-left">
            <h4 className="text-md md:text-base text-bg-primary font-semibold group-hover:text-white duration-300">
              Learn More
            </h4>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className="group-hover:rotate-[-45deg] duration-300"
          >
            <circle
              cx="25"
              cy="25"
              r="25"
              className="fill-[#DA9169] group-hover:fill-white duration-300"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.2929 18.2929C25.6834 17.9024 26.3166 17.9024 26.7071 18.2929L32.7071 24.2929C33.0976 24.6834 33.0976 25.3166 32.7071 25.7071L26.7071 31.7071C26.3166 32.0976 25.6834 32.0976 25.2929 31.7071C24.9024 31.3166 24.9024 30.6834 25.2929 30.2929L29.5858 26H18C17.4477 26 17 25.5523 17 25C17 24.4477 17.4477 24 18 24H29.5858L25.2929 19.7071C24.9024 19.3166 24.9024 18.6834 25.2929 18.2929Z"
              className="fill-white group-hover:fill-bg-primary duration-300"
            />
          </svg>
        </Link>
      )}

      {/* {activeArticle && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-end z-[51]">
          <div
            onClick={() => setActiveArticle(false)}
            className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"
          ></div>

          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] sm:w-[60%] h-[90%] sm:h-[80%] flex justify-center items-center rounded-[10px] overflow-y-scroll no-scrollbar bg-white">
            <div
              onClick={() => setActiveArticle(false)}
              className="absolute top-3 right-3 bg-bg-primary rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              <FaXmark className="text-white text-xl" />
            </div>

            <div className="w-full h-full bg-white flex flex-col justify-between py-10 px-10 rounded-[10px]">
              <img
                src={data.imgUrl}
                alt="Showcase Item Image"
                className="w-full h-[392px] max-w-full rounded-[10px] object-cover"
              />

              <div>
                <h3 className="text-bg-primary text-[28px] font-bold font-poppins mt-5">
                  {data.topTitle}
                </h3>

                <h5 className="text-black text-sm font-bold font-poppins leading-[150%] mt-[10px]">
                  {data.info}
                </h5>

                <pre className="text-black text-sm font-poppins leading-[150%] mt-[10px] overflow-auto whitespace-pre-wrap">
                  {data.description}
                  {data.description}
                  {data.description}
                  {data.description}
                </pre>

                <button
                  onClick={() => setActiveArticle(false)}
                  className="px-[72px] py-[14px] rounded-full border-2 border-bg-primary mt-6 mb-10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ShowcaseThrice;
