import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
function Nav() {
    return (
        <>
            <header className="flex justify-around m-5 items-center">
                <NavLink to={"/"} className="text-xl font-bold">
                    GoalSetting
                </NavLink>
                <ul className="flex justify-center items-center gap-6">
                    <li className="">
                        <NavLink
                            to={"/login"}
                            className="flex justify-center items-center gap-1 hover:scale-105 duration-150 delay-150 hover:font-bold"
                        >
                            Login <FaSignInAlt />
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to={"/register"}
                            className="flex justify-center items-center gap-1 hover:scale-105 duration-150 delay-150 hover:font-bold"
                        >
                            Register
                            <FaUser />
                        </NavLink>
                    </li>
                </ul>
            </header>
            <hr />
            <Outlet />
        </>
    );
}

export default Nav;
