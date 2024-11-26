import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ data }) => {
  const [currentActiveYear, setCurrentActiveYear] = useState(2018);

  return (
    <div>
      {/* News Timeline */}
      <div className="flex mb-[15px]">
        {data.map((item) => (
          <h6
            onClick={() => setCurrentActiveYear(item.year)}
            className={`text-black text-base capitalize px-4 ${
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
                    className="w-full px-9 py-6 bg-bg-secondary rounded-[10px] flex items-center"
                  >
                    <div className="w-1/12 flex flex-col justify-center items-center relative after:absolute after:content-[''] after:w-[1px] after:h-full after:right-0 after:top-[50%] after:translate-y-[-50%] after:bg-bg-primary after:opacity-50">
                      <h6 className="text-bg-primary text-lg font-bold font-pop capitalize">
                        {item.month}
                      </h6>
                      <h4 className="text-bg-primary text-[52px] font-bold font-pop capitalize">
                        {item.date}
                      </h4>
                    </div>

                    <div className="w-11/12 pl-[37px]">
                      <h2 className="text-black text-[26px] font-bold mb-6 font-poppins">
                        {item.headline}
                      </h2>
                      <p className="text-text-primary text-base font-poppins leading-[150%]">
                        {item.description}
                      </p>
                      <div className="mt-5">
                        <Link
                          to={'/'}
                          className="text-text-primary text-sm font-poppins capitalize pl-[32px] py-[5px] pr-2 rounded-[35px] inline-block border-[2px] border-bg-primary"
                        >
                          Read More
                          <img
                            src="/arrow.png"
                            className="inline pl-9"
                          />
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
    </div>
  );
};

export default NewsItem;
