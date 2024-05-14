import { Link, NavLink, useNavigate } from "react-router-dom";
import Authfun from "../provider/Authfun";
import toast from "react-hot-toast";

function Nav() {
  const { user, logOut } = Authfun();
  const navigate = useNavigate()
  async function handelLogout() {
    try {
      await logOut();
      toast.success("Logout success")
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold hover:text-black"
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
                      ? "text-black font-semibold hover:text-black"
                      : "text-gray-400 hover:text-black"
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
                      ? "text-black font-semibold hover:text-black"
                      : "text-gray-400 hover:text-black"
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
                      ? "text-black font-semibold hover:text-black"
                      : "text-gray-400 hover:text-black"
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
                      ? "text-black font-semibold hover:text-black"
                      : "text-gray-400 hover:text-black"
                  }
                  to="/pending"
                >
                  Pending
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" logo_font text-nowrap  md:text-2xl border-b-black border-b-2">
            <span className="text-blue-700">Freelance</span> Frontier
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <a className=" logo_font text-nowrap  md:text-2xl border-b-black border-b-2">
            <span className="text-blue-700">Freelance</span> Frontier
          </a>
        </div>
        <div className="ml-auto">
          {user ? (
            <div className="dropdown dropdown-end z-40">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={`${user?.photoURL}`}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link onClick={handelLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-10 text-white prompt_regular  tracking-widest  bg-[#1A1B1F] hover:bg-transparent hover:border hover:text-black cursor-pointer py-1 rounded px-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
