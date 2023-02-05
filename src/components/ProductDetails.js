import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChosenPostContext } from "../context/ChosenPostContext";
import { deleteData, getData } from "../service/TransportService";
import Comment from "./Comment";

export default function ProductDetails() {
    const [postModel, setPostModel] = useState({});
    const navigate = useNavigate();
    const postForm = useRef();
    const param = useParams();
    let postId = param.id;

    console.log("PARMA");
    console.log(postId);

    let getProductDetails = () => {
        getData(`/api/post/${postId}`).then(response => {
            setPostModel(response.data.data);
        }).catch(error => {
            alert("ASasaS" +error);
        })
    }

    let deleteHandler = (id) => {
        deleteData("/api/post", postId).then(response => {
            navigate("/");
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => { getProductDetails() }, []);

    return (
        <div class="card-view">
            <h2>Post Details</h2>
            <div class="webform2" ref={postForm}>
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" value={postModel.title}/>
                    <p></p>
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={postModel.author}/>
                    <p></p>
                </div>
                <div>
                    <label>Content</label>
                    <input type="text" value={postModel.content}/>
                    <p></p>
                </div>
                <div>
                    <button class="btn-submit btn-red" onClick={deleteHandler}>Delete Post</button>
                    <button class="btn-submit">Update Post</button>
                </div>
            </div>
            <Comment postId={postId} />
        </div>
    );
}