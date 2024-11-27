import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';

const ContactSection = () => {
  const [active, setActive] = useState('demo');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <section className="">
      <Container>
        {/* section title  */}
        <div className="max-w-full lg:max-w-[60%] mb-[42px] px-5 xl:px-0">
          <h3 className="text-[30px] lg:text-[50px] font-bold capitalize text-text-primary mb-[30px]">
            Contact Us
          </h3>
          <h6 className="text-lg lg:text-[30px] text-text-primary mb-[18px] leading-[150%]">
            Thanks for your interest. How can we help you?
          </h6>
          <p className="text-paraColor text-base lg:text-lg font-medium leading-[150%]">
            Have a question, comment, suggestion, or just want to get in touch?
            We;d love to hear from you. Fill out the form and someone will get
            back to you asap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-full lg:gap-5">
          <div className="w-full lg:w-[60%] h-full bg-white p-[35px] lg:rounded-[10px]">
            {/* Type Selector */}
            <div className="w-full flex flex-wrap justify-between gap-y-3 items-center mb-10">
              <div
                onClick={() => setActive('demo')}
                className={`w-[48%] sm:w-[28%] xl:w-auto px-[20px] py-[10px] border-2 border-bg-primary rounded-full text-xs lg:text-xs xl:text-base font-bold capitalize cursor-pointer hover:bg-bg-primary hover:text-white duration-300 ${
                  active == 'demo'
                    ? 'bg-bg-primary text-white'
                    : 'bg-transparent text-bg-primary'
                }`}
              >
                demo Request
              </div>
              <div
                onClick={() => setActive('careers')}
                className={`w-[48%] sm:w-[22%] xl:w-auto px-[20px] py-[10px] border-2 border-bg-primary rounded-full text-xs lg:text-xs xl:text-base font-bold capitalize cursor-pointer hover:bg-bg-primary hover:text-white duration-300 ${
                  active == 'careers'
                    ? 'bg-bg-primary text-white'
                    : 'bg-transparent text-bg-primary'
                }`}
              >
                Careers
              </div>
              <div
                onClick={() => setActive('partnerships')}
                className={`w-[48%] sm:w-[24%] xl:w-auto px-[20px] py-[10px] border-2 border-bg-primary rounded-full text-xs lg:text-xs xl:text-base font-bold capitalize cursor-pointer hover:bg-bg-primary hover:text-white duration-300 ${
                  active == 'partnerships'
                    ? 'bg-bg-primary text-white'
                    : 'bg-transparent text-bg-primary'
                }`}
              >
                Partnerships
              </div>
              <div
                onClick={() => setActive('general')}
                className={`w-[48%] sm:w-[22%] xl:w-auto px-[20px] py-[10px] border-2 border-bg-primary rounded-full text-xs lg:text-xs xl:text-base font-bold capitalize cursor-pointer hover:bg-bg-primary hover:text-white duration-300 ${
                  active == 'general'
                    ? 'bg-bg-primary text-white'
                    : 'bg-transparent text-bg-primary'
                }`}
              >
                General
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col gap-y-8 lg:gap-y-[52px]"
            >
              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="text"
                  placeholder="Full Name*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="email"
                  placeholder="Email Address*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="text"
                  placeholder="Contact Number*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="text"
                  placeholder="Company*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="text"
                  placeholder="Job Title*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="py-2 lg:py-5 border-b border-[#7D7D7D]">
                <input
                  required
                  type="text"
                  placeholder="Location*"
                  className="text-lg leading-[150%] placeholder:text-sm placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Write your request..."
                  className="text-lg leading-[150%] bg-[#F6ECE680]/50 w-full px-4 py-5 rounded-[10px] placeholder:text-[#7D7D7D]/60 focus-visible:outline-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-[70px] py-[15px] bg-bg-primary rounded-full text-base text-white font-bold capitalize"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-[40%] h-full bg-white/30 px-5 py-10 rounded-[10px]">
            <div className="w-full h-full">
              <div className="w-full h-full flex items-center gap-x-[10px] mb-[10px]">
                <img src="/place_marker.png" alt="" className="w-[42px]" />
                <h4 className="text-bg-primary text-[28px] font-bold capitalize">
                  Locations
                </h4>
              </div>
              <p className="text-[15px] text-black leading-[162%]">
                Since being founded in Singapore in 2001, FinIQ has developed
                and extended its presence across the globe and we now have
                offices in 14 different countries. Thanks to our global presence
                and our partners from all parts of the financial ecosystem, we
                are well positioned to react to ever-changing market conditions.
              </p>
              <Link
                to={'/'}
                className="text-bg-primary text-[15px] font-bold mt-[50px] inline-block"
              >
                - DISCOVER OUR LOCATIONS
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
