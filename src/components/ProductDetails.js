import { useContext, useEffect } from "react";
import { ChosenPostContext } from "../context/ChosenPostContext";
import { deleteData } from "../service/TransportService";
import Comment from "./Comment";

export default function ProductDetails(props) {
    let model = useContext(ChosenPostContext);
    let updateModel = () => {

    }

    let editPost = (id) => {

    }

    return (
        <div class="card-view">
            <h2>Post Details</h2>
            <div class="webform2">
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" value={model.title} onChange={updateModel} />
                    <p></p>
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={model.author} onChange={updateModel} />
                    <p></p>
                </div>
                <div>
                    <label>Content</label>
                    <input type="text" value={model.content} onChange={updateModel} />
                    <p></p>
                </div>
                <div>
                    <button class="btn-submit btn-red" onClick={() => props.deleteHandler(model.id)}>Delete Post</button>
                    <button class="btn-submit">Update Post</button>
                </div>
            </div>
            <Comment />
        </div>
    );
}