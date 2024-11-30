import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NewsItem = ({ data }) => {
  const [currentActiveYear, setCurrentActiveYear] = useState(2024);
  const [currentActivePegin, setCurrentActivePegin] = useState(1);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const handelPreviousNews = () => {
    currentActivePegin > 1
      ? (() => {
          setNextBtnDisabled(false);
          setCurrentActivePegin(currentActivePegin - 1);
        })()
      : setPrevBtnDisabled(true);
  };

  const handelNextNews = () => {
    currentActivePegin < 4
      ? (() => {
          setPrevBtnDisabled(false);
          setCurrentActivePegin(currentActivePegin + 1);
        })()
      : setNextBtnDisabled(true);
  };

  return (
    <div>
      {/* News Timeline */}
      <div
        data-aos="fade-left"
        className="flex justify-center sm:justify-start mb-[15px]"
      >
        {data.map((item) => (
          <h6
            onClick={() => setCurrentActiveYear(item.year)}
            className={`text-black text-[13px] sm:text-base capitalize px-2 sm:px-4 ${
              item.year == currentActiveYear
                ? 'opacity-100 font-bold'
                : 'opacity-50 font-normal'
            } cursor-pointer hover:opacity-100 duration-300 relative after:absolute after:bottom-[-15px] after:left-0 after:w-full after:h-[1px] after:bg-bg-primary after:content-[''] first:pl-0 last:pr-0`}
            key={item.id}
          >
            {item.year}
          </h6>
        ))}
      </div>

      {/* News Items */}
      <div className="mt-10">
        {data.map((item) => (
          <div key={item.id}>
            {item.year == currentActiveYear && (
              <div className="flex flex-col gap-y-6">
                {item.newsItems.slice(0, 5).map((item) => (
                  <div
                    data-aos="fade-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    key={item.id}
                    className="w-full px-5 sm:px-9 py-6 bg-bg-secondary rounded-[10px] flex flex-col sm:flex-row items-center"
                  >
                    <div className="sm:w-2/12 md:w-2/12 lg:w-2/12 flex flex-col justify-center items-center relative after:absolute after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-[50%] after:translate-y-[-50%] after:bg-bg-primary after:opacity-50 after:hidden sm:after:block w-full border-b-2 border-[#FFD3BB] mb-4 sm:mb-0 sm:border-b-0">
                      <h6 className="text-bg-primary text-lg font-bold font-pop capitalize">
                        {item.month}
                      </h6>
                      <h4 className="text-bg-primary text-[52px] font-bold font-pop capitalize">
                        {item.year}
                      </h4>
                    </div>

                    <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12 sm:pl-[37px]">
                      <h2 className="text-black text-lg sm:text-[26px] font-bold mb-3 sm:mb-6 font-poppins">
                        {item.headline}
                      </h2>
                      {item.description && (
                        <p className="text-text-primary text-sm sm:text-base font-poppins leading-[150%]">
                          {item.description}
                        </p>
                      )}
                      {item.link && (
                        <div className="mt-5">
                          <Link
                            to={item.link}
                            target="_blank"
                            className="flex w-full max-w-fit md:w-auto border-bg-primary border-2 rounded-full pl-5 pr-3 py-0 sm:pl-8 sm:pr-1 sm:py-[3px] items-center gap-8 group hover:bg-bg-primary hover:border-transparent duration-300"
                          >
                            <div className="text-center w-[80%] md:w-auto md:text-left">
                              <h4 className="text-md md:text-base text-bg-primary font-semibold group-hover:text-white duration-300">
                                Read More
                              </h4>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
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
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* News Items Paginate */}
      <div
        className="w-full mt-[50px] flex justify-center items-center gap-2 sm:gap-4"
        style={{ userSelect: 'none' }}
      >
        {/* Previous Button */}
        <div
          onClick={handelPreviousNews}
          title="Previous News"
          className={`w-10 h-10 sm:w-11 sm:h-11 bg-bg-secondary rounded-lg flex justify-center items-center cursor-pointer group hover:bg-bg-primary duration-300 ${
            prevBtnDisabled &&
            'opacity-50 cursor-not-allowed hover:bg-bg-secondary'
          }`}
        >
          <IoIosArrowBack
            className={`text-black sm:text-xl group-hover:text-white duration-300 ${
              prevBtnDisabled && ' group-hover:text-black'
            }`}
          />
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <div
            onClick={() => (
              setCurrentActivePegin(1),
              setPrevBtnDisabled(false),
              setNextBtnDisabled(false)
            )}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex justify-center items-center cursor-pointer group hover:text-white hover:bg-bg-primary duration-300 ${
              currentActivePegin == 1
                ? 'text-white bg-bg-primary'
                : 'bg-bg-secondary'
            }`}
          >
            <p>1</p>
          </div>

          <div
            onClick={() => (
              setCurrentActivePegin(2),
              setPrevBtnDisabled(false),
              setNextBtnDisabled(false)
            )}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex justify-center items-center cursor-pointer group hover:text-white hover:bg-bg-primary duration-300 ${
              currentActivePegin == 2
                ? 'text-white bg-bg-primary'
                : 'bg-bg-secondary'
            }`}
          >
            <p>2</p>
          </div>

          <div
            onClick={() => (
              setCurrentActivePegin(3),
              setPrevBtnDisabled(false),
              setNextBtnDisabled(false)
            )}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex justify-center items-center cursor-pointer group hover:text-white hover:bg-bg-primary duration-300 ${
              currentActivePegin == 3
                ? 'text-white bg-bg-primary'
                : 'bg-bg-secondary'
            }`}
          >
            <p>3</p>
          </div>

          <div
            onClick={() => (
              setCurrentActivePegin(4),
              setPrevBtnDisabled(false),
              setNextBtnDisabled(false)
            )}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex justify-center items-center cursor-pointer group hover:text-white hover:bg-bg-primary duration-300 ${
              currentActivePegin == 4
                ? 'text-white bg-bg-primary'
                : 'bg-bg-secondary'
            }`}
          >
            <p>4</p>
          </div>
        </div>

        {/* Next Button */}
        <div
          onClick={handelNextNews}
          title="Next News"
          className={`w-10 h-10 sm:w-11 sm:h-11 bg-bg-secondary rounded-lg flex justify-center items-center cursor-pointer group hover:bg-bg-primary duration-300 ${
            nextBtnDisabled &&
            'opacity-50 cursor-not-allowed hover:bg-bg-secondary'
          }`}
        >
          <IoIosArrowForward
            className={`text-black text-xl group-hover:text-white duration-300 ${
              nextBtnDisabled && 'group-hover:text-black'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
