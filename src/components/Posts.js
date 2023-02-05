import { Link } from "react-router-dom";
import { Post } from "./Post";



export function Posts(props) {
    let postContent = [];
    for (let postObj of props.postList) {
        postContent.push(
            <div class="two-items-layout">
                <Link to={`${postObj.id}`}>
                    <Post key={postObj.id} sth={postObj}></Post>
                </Link>
            </div>
        );
    }

    return postContent;
}