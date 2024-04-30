import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem(theme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  const logOutBtn = () => {
    logOut().then(() => {
      toast("LogOut Successfully");
    });
  };
  return (
    <div>
      <div className="navbar bg-base-100 z-20 relative">
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
          <a className="text-xl md:text-3xl font-bold gap-0">
            Creative <span className="text-orange-600 ">Canvas</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base font-medium space-x-2">
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
        <div className="navbar-end md:space-x-3">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div className="avatar flex items-center gap-2">
              <div className="w-9 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-2 group hover:bg-gray-300">
                <img
                  className="rounded-full mx-auto"
                  src={
                    user?.photoURL || "https://i.ibb.co/ZWsGc68/profile-06.png"
                  }
                />
                <ul className="absolute invisible group-hover:visible">
                  <li className="bg-slate-200 p-1 rounded-md">
                    {user?.displayName || "Muhammad Sefat"}
                  </li>
                </ul>
              </div>
              <a onClick={logOutBtn} className="btn mb-2 font-semibold">
                Logout
              </a>
            </div>
          ) : (
            <div className="space-x-2 space-y-2">
              <Link to={"/login"}>
                <button className="btn mb-2 text-base">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn text-base">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
