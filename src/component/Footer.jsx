import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-neutral ">
      <footer className="footer p-10  text-neutral-content container mx-auto">
        <nav>
        <a className=" logo_font text-nowrap  md:text-2xl border-b-black border-b-2">
            <span className="text-blue-700">Freelance</span> Frontier
          </a>
          
          <ul className="menu-horizontal flex-col gap-x-6">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white  font-semibold hover:text-black"
                    : "text-gray-400 hover:text-black"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold hover:text-white"
                    : "text-gray-400 hover:text-white"
                }
                to="/allassignment"
              >
                All Assignment
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold hover:text-white"
                    : "text-gray-400 hover:text-white"
                }
                to="/createassinment"
              >
                Create Assignment
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold hover:text-white"
                    : "text-gray-400 hover:text-white"
                }
                to="/mysubmitted"
              >
                Submitted
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold hover:text-white"
                    : "text-gray-400 hover:text-white"
                }
                to="/pending"
              >
                Pending
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
