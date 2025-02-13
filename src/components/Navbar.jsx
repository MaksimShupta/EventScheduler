import { Link, NavLink } from "react-router";
import { isAuthenticated, logOut } from "../data/authentication";

const Navbar = () => {
    return (
        <div className="navbar bg-[#1E1E1E] text-[#F5F5F5] border-b py-4 px-10">
            <div className="flex-1">
                <Link to="/">
                    <img
                        src="src/assets/logo-01.svg"
                        alt="Logo"
                        className="w-44"
                    />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="flex items-center gap-8 text-[#F5F5F5] tracking-wider">
                    <li className="hover:text-[#61BDCA] underline decoration-[#1E1E1E] hover:underline-offset-8 hover:decoration-[#61BDCA] active:underline-offset-8 active:decoration-[#61BDCA]">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="hover:text-accent underline decoration-[#1E1E1E] hover:underline-offset-8 hover:decoration-[#61BDCA] active:underline-offset-8 active:decoration-[#61BDCA]">
                        <NavLink
                            to="/my-events"
                            className={({ isActive }) =>
                                isActive ? "text-accent" : "text-text"
                            }>
                            My Events
                        </NavLink>
                    </li>
                    <li className="border border-[#61BDCA] py-2 px-8 rounded-badge hover:text-[#61BDCA]">
                        {isAuthenticated() ? (
                            <button onClick={logOut}>LOG OUT</button>
                        ) : (
                            <NavLink to="/sign-in">LOG IN</NavLink>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
