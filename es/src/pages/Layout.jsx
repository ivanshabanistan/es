import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import Email from "../components/email/Email";
import BurgerMenu from "../components/burger/BurgerMenu";

const Layout = () => {
  const activeLink = "nav__link nav__link--active";
  const normalLink = "nav__link";
  return (
    <div className="header">
      <NavLink to={"/"} className="header__logo"></NavLink>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to={"/approach"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Approach
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to={"/contacts"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Email />
      <BurgerMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
