import AboutImg from '../../assets/images/about.jpg';
import Wave3 from '../../assets/images/wave3.png';
function AboutUs() {
  return (
    <div id="about" className="mt-10 xl:mt-0">
      <div className="flex relative">
        <div className="flex-1 relative overflow-hidden flex justify-center items-center pt-[300px] pb-[50px] xl:py-32 px-5 xl:px-0 bg-bg-secondary z-[1]">
          <div className="w-full absolute top-0 z-[10] h-24 bg-white hidden xl:block"></div>

          <div className="xl:pl-60 z-[2] xl:pr-14 pt-10 xl:pt-20 ">
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
            className="absolute scale-150 -right-72 z-[-1] top-[300px] xl:top-[200px]"
            src={Wave3}
            alt=""
          />
        </div>

        <div className="flex-1 xl:static absolute top-[-100px] right-0 w-[85%] h-[400px] xl:h-auto z-[2]">
          <img className="w-full h-full object-cover" src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
