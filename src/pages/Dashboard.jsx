import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Dashboard() {
    const { user, isLoading } = useSelector((state) => state.auth);

    return (
        <div>
            <div className="flex justify-center items-center">
                <h1>
                    {user ? (
                        <span>Welcome </span>
                    ) : (
                        <span className=" text-red-500 underline">
                            <Link to="/register">Log in first</Link>
                        </span>
                    )}

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
