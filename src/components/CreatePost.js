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
        <form ref={newPostForm}>
            <label>
                Title
            </label>
            <input type="text" name={'title'}></input>
            <label>
                Author
            </label>
            <input type="text" name={'author'}></input>
            <label>
                Content
            </label>
            <textarea name={'content'}></textarea>
            <button type="button" onClick={createNewPost}>Create</button>
            <button type="button" onClick={() => props.hideForm(false)}> Cancel</button>
        </form>
    );
}