import { NavLink } from "react-router-dom";
import { Navbar, UnorderedList, Logo } from "../styles/styles.styled";
import { BsPlayFill } from "react-icons/bs";

function Navigation() {
  return (
    <Navbar>
      <Logo>
        <BsPlayFill className="text-green-600 text-6xl" />
        <figcaption className="text-2xl">jPlay</figcaption>
      </Logo>
      <UnorderedList>
        <NavLink
          to="home"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="movies"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to="shows"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shows
        </NavLink>
      </UnorderedList>
    </Navbar>
  );
}

export default Navigation;
