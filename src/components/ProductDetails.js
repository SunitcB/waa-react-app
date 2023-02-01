import { useEffect } from "react";
import { deleteData } from "../service/TransportService";

export default function ProductDetails(props) {

    let updateModel = () => {

    }

    let editPost = (id) => {

    }

    return (
        <div>
            <label>Title</label>
            <input type="text" value={props.model.title} onChange={updateModel} />
            <label>Author</label>
            <input type="text" value={props.model.author} onChange={updateModel} />
            <label>Content</label>
            <input type="text" value={props.model.content} onChange={updateModel} />
            <button onClick={() => props.deleteHandler(props.model.id)}>Delete Post</button>
            <button>Update Post</button>
        </div>
    );
}