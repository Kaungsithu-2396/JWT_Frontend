import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { isMobile } from "react-device-detect";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetInfo } from "../app/features/auth/authSlice";
import { registerUser } from "../app/features/auth/authSlice";
function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cf_password: "",
    });
    const { name, email, password, cf_password } = formData;
    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    useEffect(() => {
        if (isError) {
            console.log(message);
        } else {
            dispatch(resetInfo());
        }
        if (isSuccess && user) {
            navigate("/");
        }
    }, [user, isError, isLoading, isSuccess, message]);
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (password !== cf_password) {
            alert("password do not match");
        } else {
            const userData = { name, email, password };
            dispatch(registerUser(userData));
        }
    };

    return (
        <>
            {isLoading && <h2>loading...</h2>}

            <div className="flex justify-center items-center flex-col">
                <section className="mt-5">
                    <div className="flex justify-center items-center text-4xl gap-3">
                        <FaUser />
                        Register
                    </div>
                    {message && (
                        <h2 className="text-3xl text-red-500 my-10">
                            {message}
                        </h2>
                    )}
                    <h1 className="text-2xl my-6 text-black/70 cursor-default  ">
                        Account Registration
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
                                type="text"
                                name="name"
                                id="name"
                                size={isMobile ? 34 : 50}
                                placeholder="Enter your name"
                                className=" pl-10 py-4 border border-black/20 rounded-md"
                                onChange={onChangeHandler}
                            />
                            <div className="absolute top-[1.25rem] left-4 ">
                                <FaUser />
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
                        <div className="relative mt-5">
                            <input
                                type="password"
                                name="cf_password"
                                id="cf_password"
                                size={isMobile ? 34 : 50}
                                placeholder="Confirm your password"
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

export default Register;
