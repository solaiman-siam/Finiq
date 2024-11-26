import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Logo from "../../assets/images/footer-logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import Wave4 from "../../assets/images/wave4.png";

function Footer() {
  return (
    <div className=" relative overflow-hidden bg-[#0F0500]">
      <Container>
        <div className="">
          <div className="flex border-b border-white/10 justify-center gap-60 py-10">
            <div className="space-y-4">
              <img className="w-36" src={Logo} alt="" />
              <div className="flex items-center gap-6">
                <div className="bg-[#251B16] text-white p-3 rounded-full">
                  <FaLinkedinIn size={22} />
                </div>
                <div className="bg-[#251B16] text-white p-3 rounded-full">
                  <TfiEmail size={20} />
                </div>
              </div>
              <div className="pt-2">
                <Link to={""}>
                  <button className="text-white bg-bg-primary font-bold px-12 py-4 rounded-full ">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-white flex flex-col text-lg space-y-6">
              <Link>
                <h4>Overview</h4>
              </Link>
              <Link>
                <h4>Core Framework</h4>
              </Link>
              <Link>
                <h4>Our Partners</h4>
              </Link>
              <Link>
                <h4>About Us</h4>
              </Link>
            </div>
            <div className="text-white text-lg flex flex-col space-y-6">
              <Link>
                <h4>Showcase</h4>
              </Link>
              <Link>
                <h4>Solutions</h4>
              </Link>
              <Link>
                <h4>News</h4>
              </Link>
              <Link>
                <h4>Locations</h4>
              </Link>
            </div>
          </div>
          <p className="text-white py-6 text-center ">
            2024 © FinIQ Consulting Pvt. Ltd. All rights reserved.
          </p>
        </div>
      
      </Container>
      <img
        className="absolute  scale-125  bottom-0 object-cover right-0"
        src={Wave4}
        alt=""
      />
    </div>
  );
}

export default Footer;
