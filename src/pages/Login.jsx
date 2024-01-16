import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { isMobile } from "react-device-detect";
import { RiLockPasswordLine } from "react-icons/ri";
import { login } from "../app/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetInfo } from "../app/features/auth/authSlice";
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const { email, password } = formData;
    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    );
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userData = { email, password };
        console.log(userData);
        dispatch(login(userData));
    };
    useEffect(() => {
        if (isError) {
            alert(message);
        }
        if (isSuccess && user) {
            navigate("/");
        }
        dispatch(resetInfo());
    }, [isLoading, isSuccess, isError]);

    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <section className="mt-5">
                    <div className="flex justify-center items-center text-4xl gap-3">
                        <FaSignInAlt />
                        Login
                    </div>
                    <h1 className="text-2xl my-6 text-black/70 cursor-default  ">
                        Account Login
                    </h1>
                </section>
                <br />
                <section>
                    <form action="" onSubmit={onSubmitHandler}>
                        <div className="relative mt-5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                size={isMobile ? 34 : 50}
                                placeholder="Enter your Email"
                                className=" pl-10 py-4 border border-black/20 rounded-md"
                                onChange={onChangeHandler}
                            />
                            <div className="absolute top-[1.25rem] left-4 ">
                                <MdEmail />
                            </div>
                        </div>
                        <div className="relative mt-5">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                size={isMobile ? 34 : 50}
                                placeholder="Enter your Password"
                                className=" pl-10 py-4 border border-black/20 rounded-md"
                                onChange={onChangeHandler}
                            />
                            <div className="absolute top-[1.25rem] left-4 ">
                                <RiLockPasswordLine />
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <button
                                type="Submit"
                                className="border border-black px-5 py-2 rounded-md bg-black text-white w-full hover:font-bold  duration-200  delay-150"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Login;
