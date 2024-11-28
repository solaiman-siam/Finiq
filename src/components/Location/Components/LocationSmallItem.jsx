import { useState } from 'react';
import { FaMapMarkerAlt, FaMinus, FaPhoneAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

const LocationSmallItem = ({ data }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      data-aos="zoom-in"
      className="w-full sm:w-[31%] rounded-xl relative group overflow-hidden"
    >
      <img
        src={data.image}
        alt="Destination Image"
        className="w-full max-w-full h-[300px] sm:h-auto rounded-xl group-hover:scale-105 duration-500"
      />

      <div className="absolute top-0 left-0 w-full h-full p-5 sm:p-8 flex flex-col justify-between z-[1]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-[14px]">
            <h3 className="text-white text-lg font-bold font-poppins capitalize">
              {data.name}
            </h3>
            <img
              src={data.flag}
              alt=""
              className="object-contain max-w-[20px] sm:max-w-[30px]"
            />
          </div>
        </div>
        <div>
          <div
            onClick={() => setOverlay(!overlay)}
            className="w-10 sm:w-[50px] h-10 sm:h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer"
          >
            {overlay ? (
              <FaMinus className="text-bg-primary text-[20px]" />
            ) : (
              <FaPlus className="text-bg-primary text-[20px]" />
            )}
          </div>
        </div>

        <div
          className={`absolute w-full h-full left-0 bottom-0 bg-bg-primary/90 z-[-1] duration-500 ${
            overlay ? 'opacity-1 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col justify-center sm:justify-end gap-y-5 w-full h-full px-12 py-[120px]">
            <div className="w-full flex gap-x-3">
              <div className="w-[5%]">
                <FaMapMarkerAlt
                  className={`text-white text-xs sm:text-xl ${
                    overlay ? 'visible' : 'invisible'
                  }`}
                />
              </div>
              <div className="w-[95%]">
                <p
                  className={`text-white text-xs sm:text-base leading-[150%] ${
                    overlay ? 'visible' : 'invisible'
                  }`}
                >
                  {data.details[0].location}
                </p>
              </div>
            </div>

            {data.details[0].contact == '' ? null : (
              <div className="w-full flex gap-x-3">
                <div className="w-[5%]">
                  <FaPhoneAlt
                    className={`text-white text-xs sm:text-xl ${
                      overlay ? 'visible' : 'invisible'
                    }`}
                  />
                </div>
                <div className="w-[95%]">
                  <p
                    className={`text-white text-xs sm:text-base leading-[150%] ${
                      overlay ? 'visible' : 'invisible'
                    }`}
                  >
                    {data.details[0].contact}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSmallItem;
