import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../app/features/auth/authSlice";
import { resetInfo } from "../app/features/auth/authSlice";
function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const logoutHandler = () => {
        dispatch(logoutUser());
        dispatch(resetInfo());
        navigate("/");
    };
    return (
        <>
            <header className="flex justify-around m-5 items-center">
                <NavLink to={"/"} className="text-xl font-bold">
                    GoalSetting
                </NavLink>
                <ul className="flex justify-center items-center gap-6">
                    {user ? (
                        <button
                            className=" bg-red-500 px-4 py-2 rounded-e text-white hover:bg-red-400 hover:text-black duration-150 delay-150"
                            onClick={logoutHandler}
                        >
                            logout
                        </button>
                    ) : (
                        <>
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
                        </>
                    )}
                </ul>
            </header>
            <hr />
            <Outlet />
        </>
    );
}

export default Nav;
