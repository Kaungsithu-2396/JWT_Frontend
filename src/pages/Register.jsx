import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { isMobile } from "react-device-detect";
import { RiLockPasswordLine } from "react-icons/ri";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cf_password: "",
    });
    console.log(isMobile);
    const { name, email, password, cf_password } = formData;
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <section className="mt-5">
                    <div className="flex justify-center items-center text-4xl">
                        <FaUser />
                    </div>
                    <h1 className="text-2xl my-6 text-black/70  ">
                        Account Registration
                    </h1>
                </section>
                <br />
                <section>
                    <form action="">
                        <div className="relative mt-5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                size={isMobile ? 34 : 50}
                                placeholder="Enter your Email"
                                className=" pl-10 py-4 border border-black/20 rounded-md"
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
                            />
                            <div className="absolute top-[1.25rem] left-4 ">
                                <RiLockPasswordLine />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button
                                type="Submit"
                                className="border border-black px-5 py-2 rounded-md hover:bg-black/60 hover:text-white hover:scale-105 duration-200  delay-150"
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
