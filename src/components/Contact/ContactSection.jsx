import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const tabArr = [
    "demo Request",
    "Careers",
    "Partnerships",
    "General"
  ]

  return (
    <section className="">
      <Container>
        {/* section title  */}
        <div className="max-w-full lg:max-w-[60%] mb-[42px] px-5 xxl:px-0">
          <h3
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-[30px] lg:text-[50px] font-bold capitalize text-text-primary mb-[30px]"
          >
            Contact Us
          </h3>
          <h6
            data-aos="fade-left"
            data-aos-delay="800"
            className="text-lg lg:text-[30px] text-text-primary mb-[18px] leading-[150%]"
          >
            Thanks for your interest. How can we help you?
          </h6>
          <p
            data-aos="fade-left"
            data-aos-delay="1000"
            className="text-paraColor text-base lg:text-lg font-medium leading-[150%]"
          >
            Have a question, comment, suggestion, or just want to get in touch?
            We;d love to hear from you. Fill out the form and someone will get
            back to you asap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-full gap-5 px-5 xxl:px-0">
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full lg:w-[60%] h-full bg-white p-[35px] rounded-[10px]"
          >
            {/* Type Selector */}
            <div className="w-full flex flex-wrap justify-between gap-y-3 items-center mb-10">
              {
                tabArr.map((tab, index) => <Link key={index} > <h4 
               
                href="mailto:meeting@finiq.com"

                onClick={() => setActiveTab(index)}
                className={`w-[48%] sm:w-[28%] xl:w-auto px-[20px] py-[10px]  rounded-full text-xs lg:text-xs xl:text-[22px] font-bold capitalize cursor-pointer   duration-300  ${activeTab === index ? "bg-bg-primary text-white border-bg-primary border-2" : "border-bg-primary  text-bg-primary hover:bg-bg-primary border-2 hover:text-white"}`}> {tab} </h4> </Link>)
              }

            </div>

            {/* Form */}
            <form
              data-aos="fade-top"
              data-aos-delay="2000"
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

          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="w-full lg:w-[40%] h-full bg-white/30 px-5 py-10 rounded-[10px]"
          >
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
                to={'/showcases#locations'}
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
