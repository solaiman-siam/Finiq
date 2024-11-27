import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ data }) => {
  const [currentActiveYear, setCurrentActiveYear] = useState(2018);

  return (
    <div>
      {/* News Timeline */}
      <div className="flex justify-center sm:justify-start mb-[15px]">
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
                {item.newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full px-5 sm:px-9 py-6 bg-bg-secondary rounded-[10px] flex flex-col sm:flex-row items-center"
                  >
                    <div className="sm:w-2/12 md:w-2/12 lg:w-2/12 flex flex-col justify-center items-center relative after:absolute after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-[50%] after:translate-y-[-50%] after:bg-bg-primary after:opacity-50 after:hidden sm:after:block w-full border-b-2 border-[#FFD3BB] mb-4 sm:mb-0 sm:border-b-0">
                      <h6 className="text-bg-primary text-lg font-bold font-pop capitalize">
                        {item.month}
                      </h6>
                      <h4 className="text-bg-primary text-[52px] font-bold font-pop capitalize">
                        {item.date}
                      </h4>
                    </div>

                    <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12 sm:pl-[37px]">
                      <h2 className="text-black text-lg sm:text-[26px] font-bold mb-3 sm:mb-6 font-poppins">
                        {item.headline}
                      </h2>
                      <p className="text-text-primary text-sm sm:text-base font-poppins leading-[150%]">
                        {item.description}
                      </p>
                      <div className="mt-5">
                        <Link
                          to={'/'}
                          className="text-text-primary text-sm font-poppins capitalize pl-[32px] py-[5px] pr-2 rounded-[35px] inline-block border-[2px] border-bg-primary"
                        >
                          Read More
                          <img src="/arrow.png" className="inline pl-9" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* News Items Paginate */}
      <div className="w-full"></div>
    </div>
  );
};

export default NewsItem;
