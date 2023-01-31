import { Post } from "./Post";



export function Posts(props) {
    console.log(props);
    // let postContent = postList.map(x => {
    //     return <Post key={x.id} sth={x}></Post>
    // })
    // return postContent;
    
    let postContent = [];
    for(let postObj of props.postList){
        postContent.push(<Post key={postObj.id} sth={postObj} clickHandler={props.postClickHandler}></Post>);
    }

    return postContent;
}