import { Posts } from "../components/Posts";
import { useCallback, useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import { deleteData, getData, postData } from "../service/TransportService";
import CreatePost from "../components/CreatePost";
import { ChosenPostContext } from "../context/ChosenPostContext";
import "./Dashboard.css"

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

    return (
        <div>
            <div class="card-view">
                <h2>All Posts</h2>
                <Posts postList={postList} postClickHandler={postClickHandler} />
            </div>

            <div class="card-view webform1">
                <h3>Update First POst Title</h3>
                <div><input type="text" value={changedTitle} onChange={changeTitleText}></input>
                </div>
                <br />
                <button class="btn-submit" onClick={updatePostTitle}>Update</button>
                <button class="btn-submit btn-purple" onClick={() => setShowCreate(true)}>Create a post</button>
            </div>

            <ChosenPostContext.Provider value={detailsModel}>
                {showDetails && <ProductDetails deleteHandler={deletePost} />}
            </ChosenPostContext.Provider>

            {showCreate ? <CreatePost hideForm={setShowCreate} createHandler={setLoadAfterCreate} /> : null}
        </div>
    );
}