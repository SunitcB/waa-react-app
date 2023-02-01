import { Posts } from "../components/Posts";
import { useCallback, useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { deleteData, getData, postData } from "../service/TransportService";
import CreatePost from "../components/CreatePost";

export function Dashboard() {

    const [postList, setPostList] = useState([]);
    const [loadAfterDelete, setLoadAfterDelete] = useState(false);
    const [loadAfterCreate, setLoadAfterCreate] = useState(false);
    const [changedTitle, setChangedTitle] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [detailsModel, setDetailsModel] = useState({});
    const [showCreate, setShowCreate] = useState(false);

    let deletePost = (id) => {
        deleteData("/api/post", id).then(response => {
            alert(response.data.message);
            setLoadAfterDelete(!loadAfterDelete);
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        console.log("REFRESH THE DATA")
        getData("/api/posts").then(response => {
            setPostList(response.data.data)
        }).catch(error => {
            alert(error);
        })
    }, [loadAfterDelete, loadAfterCreate]);


    let changeTitleText = (evt) => {
        setChangedTitle(evt.target.value);
    }

    let updatePostTitle = () => {
        let updatedPostList = [...postList]
        updatedPostList[0].title = changedTitle
        setPostList(updatedPostList);
    };

    let postClickHandler = (id) => {
        setShowDetails(true);
        setDetailsModel(postList.find(x => x.id === id));
    };

    return <div>
        <Posts postList={postList} postClickHandler={postClickHandler} />
        <input type="text" value={changedTitle} onChange={changeTitleText}></input>
        <button onClick={updatePostTitle}>Update</button>
        <button onClick={() => setShowCreate(true)}>Create a post</button>
        {showDetails ? <ProductDetails model={detailsModel} deleteHandler={deletePost} /> : null}
        {showCreate ? <CreatePost hideForm={setShowCreate} createHandler={setLoadAfterCreate}/> : null}
    </div>
}