import "./App.css";
import HeaderMain from "./components/Header/Header";
import PageHome from "./components/HomePage/PageHome";
import PageAbout from "./components/AboutPage/PageAbout";
import PageReview from "./components/ReviewPage/PageRevies";
import PageBlog from "./components/BlogPage/PageBlog";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Page404 from "./components/404Page/Page404";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<PageHome></PageHome>}></Route>
                <Route path="/home" element={<PageHome></PageHome>}></Route>
                <Route path="/about" element={<PageAbout></PageAbout>}></Route>
                <Route
                    path="/reviews"
                    element={<PageReview></PageReview>}
                ></Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard></Dashboard>}
                ></Route>
                <Route path="/blogs" element={<PageBlog></PageBlog>}></Route>
                <Route path="*" element={<Page404></Page404>}></Route>
            </Routes>
        </div>
    );
}

export default App;
