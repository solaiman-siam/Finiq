import EmpowerIcon1 from '../../assets/images/empower-icon1.png';
import EmpowerIcon2 from '../../assets/images/empower-icon2.png';
import EmpowerIcon3 from '../../assets/images/empower-icon3.png';
import Empower1 from '../../assets/images/empower1.jpg';
import Empower2 from '../../assets/images/empower2.jpg';
import Empower3 from '../../assets/images/empower3.jpg';
import Container from '../Container';

function ExpowerOthers() {
  return (
    <div>
      <Container>
        <div className="pt-16 sm:pt-24 px-5 xxl:px-0">
          <div
            data-aos="zoom-in"
            className="flex w-full items-center flex-col  justify-center gap-4 pb-12"
          >
            <h3 className="text-4xl sm:text-[50px] text-center font-bold text-text-primary mb-4">
              FinIQ empowers others to excel!
            </h3>
            <p className="text-text-primary sm:w-7/12 lg:w-4/12 text-center">
              Financial institutions worldwide rely on FinIQ to streamline their
              operations and excel in a competitive landscape
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* item 1 */}
            <div
              data-aos="fade-left"
              className="bg-[#F6ECE6] shadow-lg rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-xl h-[240px] group">
                <img
                  className="absolute top-0 left-0 z-[4] object-cover w-full h-full group-hover:scale-105 duration-300"
                  src={Empower1}
                  alt=""
                />
                <div className="absolute z-[6] bg-bg-overlay/70 w-full h-full">
                  <img
                    className="top-1/2 z-[8] left-1/2 absolute w-60 -translate-x-1/2 -translate-y-1/2"
                    src={EmpowerIcon1}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-5 text-text-dark ">
                <p>
                  Porta ac tincidunt malesuada egestas sit. Mauris in varius ut
                  elementum facilisi dolor porttitor praesent. Erat.
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div
              data-aos="zoom-in"
              className="bg-[#F6ECE6] shadow-lg rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-xl h-[240px] group">
                <img
                  className="absolute top-0 left-0 z-[4]  object-cover w-full h-full group-hover:scale-105 duration-300"
                  src={Empower2}
                  alt=""
                />
                <div className="absolute z-[6] bg-bg-overlay/70 w-full h-full">
                  <img
                    className="top-1/2 z-[8] left-1/2 absolute w-60 -translate-x-1/2 -translate-y-1/2"
                    src={EmpowerIcon2}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-5 text-text-dark ">
                <p>
                  Porta ac tincidunt malesuada egestas sit. Mauris in varius ut
                  elementum facilisi dolor porttitor praesent. Erat.
                </p>
              </div>
            </div>
            {/* item 3 */}
            <div
              data-aos="fade-right"
              className="bg-[#F6ECE6] shadow-lg rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-xl h-[240px] group">
                <img
                  className="absolute top-0 left-0 z-[4]  object-cover w-full h-full group-hover:scale-105 duration-300"
                  src={Empower3}
                  alt=""
                />
                <div className="absolute z-[6] bg-bg-overlay/70 w-full h-full">
                  <img
                    className="top-1/2 z-[8] left-1/2 absolute w-60 -translate-x-1/2 -translate-y-1/2"
                    src={EmpowerIcon3}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-5 text-text-dark ">
                <p>
                  Porta ac tincidunt malesuada egestas sit. Mauris in varius ut
                  elementum facilisi dolor porttitor praesent. Erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExpowerOthers;
