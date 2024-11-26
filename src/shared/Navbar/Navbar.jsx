import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container";

function Navbar() {
  return (
    <div>
      <Container>
        <div className="flex items-top border-b border-[#DCDCDC]  justify-between ">
          <div className="py-6">
            <img className="w-40 " src="/logo.png" alt="" />
          </div>
          <div className="flex items-top gap-14 h-full">
            <div className="flex items-top gap-2 h-full text-text-primary">
              <NavLink to={'/'} className={({isActive}) => isActive ? 'border-t-4 text-bg-primary border-bg-primary' : 'border-t-4 text-bg-white border-white'}>
                <h4 className="px-4 py-10  h-full">Home</h4>
              </NavLink>
              <NavLink to={'/solutions'} className={({isActive}) => isActive ? 'border-t-4 text-bg-primary border-bg-primary' : 'border-t-4 text-bg-white border-white'}>
                <h4 className="px-4 py-10   h-full">Sollutions</h4>
              </NavLink>
              <NavLink to={'/showcases'} className={({isActive}) => isActive ? 'border-t-4 text-bg-primary border-bg-primary' : 'border-t-4 text-bg-white border-white'}>
                <h4 className="px-4 py-10   h-full">Showcase</h4>
              </NavLink>
            </div>
            <div>
              <Link>
                <h4 className="px-8 my-7 py-4 rounded-full common-gradient">Contact Us</h4>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
