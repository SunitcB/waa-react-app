import { Post } from "./Post";



export function Posts(props) {
    let postContent = [];
    for(let postObj of props.postList){
        postContent.push(<Post key={postObj.id} sth={postObj} clickHandler={props.postClickHandler}></Post>);
    }

    return postContent;
}