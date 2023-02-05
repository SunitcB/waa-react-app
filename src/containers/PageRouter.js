import { Navigate, Route, Routes } from "react-router";
import CreatePost from "../components/CreatePost";
import { Posts } from "../components/Posts";
import ProductDetails from "../components/ProductDetails";
import { Dashboard } from "./Dashboard";

export default function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="posts" />} />
            <Route path="/posts">
                <Route index element={<Dashboard />}></Route>
                <Route path=":id" element={<ProductDetails />}></Route>
            </Route>Í
            <Route path="createPost" element={<CreatePost />} />
        </Routes>
    );
}