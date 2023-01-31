import { Posts } from "../components/Posts";
import { useState } from "react";
import ProductDetails from "../components/ProductDetails";

export function Dashboard() {

    let [postList, setPostList] = useState([
        { id: 1, author: "Sunit", content: "This is supposed to be a content", title: "Some title" },
        { id: 2, author: "Sunit", content: "This is supposed to be a content", title: "Some title" },
        { id: 3, author: "Sunit", content: "This is supposed to be a content", title: "Some title" }
    ]);

    const [changedTitle, setChangedTitle] = useState("");

    let changeTitleText = (evt) => {
        setChangedTitle(evt.target.value);
    }

    let updatePostTitle = () => {
        let updatedPostList = [...postList]
        console.log(changedTitle);
        updatedPostList[0].title = changedTitle
        console.log(updatedPostList)
        setPostList(updatedPostList);
    };

    const [showDetails, setShowDetails] = useState(false);
    const [detailsModel, setDetailsModel] = useState({});

    let postClickHandler = (id) => {
        console.log("ASAS");
        console.log(id);
        setShowDetails(true);
        setDetailsModel(postList.find(x => x.id == id));
    };

    

    return <div>
        {postList[0].title}
        <Posts postList={postList} postClickHandler={postClickHandler} />
        <input type="text" value={changedTitle} onChange={changeTitleText}></input>
        <button onClick={updatePostTitle}>Update</button>
        {showDetails ? <ProductDetails model={detailsModel} /> : null}
    </div>
}