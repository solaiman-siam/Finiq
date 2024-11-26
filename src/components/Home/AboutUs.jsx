import AboutImg from "../../assets/images/about.jpg";
import Wave3 from "../../assets/images/wave3.png";
function AboutUs() {
  return (
    <div className="">
      <div className="flex ">
        <div className="flex-1 relative overflow-hidden flex justify-center items-center py-32 bg-bg-secondary">
          <div className="w-full absolute top-0 z-[10] h-24 bg-white"></div>
          <div className=" pl-60 z-[2] pr-14 pt-20 ">
            <h2 className="text-4xl font-bold text-text-primary pb-4">
              About Us
            </h2>
            <p className="text-text-primary">
              At FinIQ, we recognize the transformative changes in the financial
              industry. As client trading evolves into an increasingly
              electronic landscape, our solutions empower financial institutions
              to manage and distribute products seamlessly across various
              channels. Since our establishment in 2003, we have specialized in
              distribution and digitalization technology, enabling over 60
              global clients to streamline their trading and post-trade
              processes. <br></br> <br></br> Our award-winning platform offers
              real-time liquidity sourcing, instant pricing, and robust API
              connectivity with 30+ partners, including industry leaders like
              Bloomberg and JPMorgan. With a dedicated team of 400
              professionals, we provide unparalleled support across time zones,
              ensuring our clients achieve operational excellence and enhanced
              efficiency in their financial operations. Experience the future of
              finance with FinIQ—where technology meets innovation.
            </p>
          </div>
          <img
            className="absolute scale-150 -right-72 z-[1]  top-[200px]"
            src={Wave3}
            alt=""
          />
        </div>
        <div className="flex-1 relative">
          <img className="w-full h-full object-cover" src={AboutImg} alt="" />
          <div className="cursor-pointer absolute z-10  -bottom-20 right-40">
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
      </div>
    </div>
  );
}

export default AboutUs;
