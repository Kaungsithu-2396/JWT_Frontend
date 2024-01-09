import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Dashboard() {
    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     const userInfo = JSON.parse(localStorage.getItem("user"));
    //     setUser(userInfo);
    // }, []);
    const { user, isLoading } = useSelector((state) => state.auth);

    return (
        <div>
            <div className="flex justify-center items-center">
                <h1>
                    Welcome Mr{" "}
                    {isLoading ? (
                        <h2>loading</h2>
                    ) : (
                        <span className="text-3xl font-bold">
                            {user?.data?.name}{" "}
                        </span>
                    )}
                </h1>
            </div>
        </div>
    );
}

export default Dashboard;
