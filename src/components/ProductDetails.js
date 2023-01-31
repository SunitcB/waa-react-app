export default function ProductDetails(props) {

    let updateModel = () => {

    }

    return (
        <div>
            <label>Title</label>
            <input type="text" value={props.model.title} onChange={updateModel} />
            <label>Author</label>
            <input type="text" value={props.model.author} onChange={updateModel} />
            <label>Content</label>
            <input type="text" value={props.model.content} onChange={updateModel} />
        </div>
    );
}