import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const ShowcaseThrice = ({ data }) => {
  const [activeArticle, setActiveArticle] = useState(false);

  return (
    <div className="w-[32%] flex flex-col justify-between bg-white p-5 rounded-[10px]">
      <img
        src={data.imgUrl}
        alt="Showcase Item Image"
        className="w-full max-w-full rounded-[10px]"
      />

      <div>
        <h3 className="text-bg-primary text-[28px] font-bold font-poppins mt-5">
          {data.topTitle}
        </h3>

        <h5 className="text-black text-sm font-bold font-poppins leading-[150%] mt-[10px]">
          {data.info}
        </h5>

        <p className="text-black text-sm font-poppins leading-[150%] mt-[10px] line-clamp-4">
          {data.description}
        </p>
      </div>

      <div className="mt-5">
        <button
          onClick={() => setActiveArticle(true)}
          className="text-text-primary text-sm font-poppins capitalize pl-[32px] py-[5px] pr-2 border-2 border-[#F4AB83] rounded-[35px] inline-block"
        >
          Read More
          <img src="/src//assets/images/arrow.png" className="inline pl-9" />
        </button>
      </div>

      {activeArticle && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-end z-[9]">
          <div
            onClick={() => setActiveArticle(false)}
            className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"
          ></div>

          {/* Transparent Background */}
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[60%] h-[80%] flex justify-center items-center rounded-[10px] overflow-y-scroll no-scrollbar bg-white">
            {/* Background Click Closer */}
            <div
              onClick={() => setActiveArticle(false)}
              className="absolute top-3 right-3 bg-bg-primary rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              <FaXmark className="text-white text-xl" />
            </div>

            {/* Main Contents */}
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
      )}
    </div>
  );
};

export default ShowcaseThrice;
