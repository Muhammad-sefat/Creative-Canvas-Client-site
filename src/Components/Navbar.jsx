import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active border border-orange-600 rounded-lg" : ""
                }
              >
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink
                to="/allArt&Carft"
                className={({ isActive }) =>
                  isActive ? "active border border-orange-600 rounded-lg" : ""
                }
              >
                <li>
                  <a>All Art & Craft Items</a>
                </li>
              </NavLink>
              <NavLink
                to="/AddCraftItem"
                className={({ isActive }) =>
                  isActive ? "active border border-orange-600 rounded-lg" : ""
                }
              >
                <li>
                  <a>Add Craft Items</a>
                </li>
              </NavLink>
              <NavLink
                to="/myCraftList"
                className={({ isActive }) =>
                  isActive ? "active border border-orange-600 rounded-lg" : ""
                }
              >
                <li>
                  <a>My Art & Craft List</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold gap-0">
            Creative <span className="text-orange-600 ">Canvas</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active border border-orange-600 rounded-lg" : ""
              }
            >
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink
              to="/allArt&Carft"
              className={({ isActive }) =>
                isActive ? "active border border-orange-600 rounded-lg" : ""
              }
            >
              <li>
                <a>All Art & Craft Items</a>
              </li>
            </NavLink>
            <NavLink
              to="/AddCraftItem"
              className={({ isActive }) =>
                isActive ? "active border border-orange-600 rounded-lg" : ""
              }
            >
              <li>
                <a>Add Craft Items</a>
              </li>
            </NavLink>
            <NavLink
              to="/myCraftList"
              className={({ isActive }) =>
                isActive ? "active border border-orange-600 rounded-lg" : ""
              }
            >
              <li>
                <a>My Art & Craft List</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to={"/login"}>
            <button className="btn text-base">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn text-base">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
