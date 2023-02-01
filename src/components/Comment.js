import { useContext, useEffect, useMemo, useState } from "react";
import { ChosenPostContext } from "../context/ChosenPostContext";
import { getData } from "../service/TransportService";

export default function Comment() {
    let chosenPostObj = useContext(ChosenPostContext);
    let postId = chosenPostObj.id;
    const [commentList, setCommentList] = useState([]);
    let getComments = (postId) => {
        console.log("RENDERING COMMENTS");

        getData("/api/post/" + postId + "/comments").then(response => {
            setCommentList(response.data.data.map(x => <li key={x.id}>{x.name}</li>));
        }).catch(error => {
            alert(error);
        })
    }

    useMemo(() => { getComments(postId) }, [postId])

    return (
        <div>
            <h3>Comments on Post</h3>
            <ul>
                {commentList}
            </ul>
        </div>
    );
}