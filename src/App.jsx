import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
    return (
        <>
            <Nav />
            <div className="">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
