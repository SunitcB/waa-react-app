import { useRef, useState } from "react";
import { postData } from "../service/TransportService";

export default function CreatePost(props) {
    const newPostForm = useRef();

    let createNewPost = () => {

        const form = newPostForm.current;
        const postObj = {
            title: form['title'].value,
            author: form['author'].value,
            content: form['content'].value
        };

        postData("/api/posts", postObj).then(response => {
            alert(response.data.message);
            props.createHandler(true);
        }).catch(error => {
            alert(error);
        })
    }

    return (
        
        <form ref={newPostForm} class="card-view">
            <h2>Add New Post</h2>
            <div class="webform2">
                <div>
                    <label>
                        Title
                    </label>
                    <input type="text" name={'title'}></input>
                </div>
                <div>
                    <label>
                        Author
                    </label>
                    <input type="text" name={'author'}></input>
                </div>
                <div>
                    <label>
                        Content
                    </label>
                    <textarea name={'content'}></textarea>
                </div>
                <div>
                    <button class="btn-submit btn-purple" type="button" onClick={createNewPost}>Create</button>
                    <button class="btn-submit btn-red" type="button" onClick={() => props.hideForm(false)}> Cancel</button>
                </div>
            </div>
        </form>
    );
}