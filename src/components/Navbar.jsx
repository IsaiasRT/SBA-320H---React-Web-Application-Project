import { NavLink } from "react-router-dom";
import { useHunter } from "../context/HunterContext.jsx";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/monsters", label: "Monsters" },
  { to: "/journal", label: "Journal" },
  { to: "/favorites", label: "Favorites" },
  { to: "/statistics", label: "Statistics" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const { state, dispatch } = useHunter();

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        Hunter Journal
      </NavLink>

      <nav className="navbar-links" aria-label="Main navigation">
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {label}
            {label === "Favorites" && state.favorites.length > 0 && (
              <span className="nav-badge">{state.favorites.length}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} theme`}
        title={`Switch to ${state.theme === "dark" ? "light" : "dark"} theme`}
      >
        {state.theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
