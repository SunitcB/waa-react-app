export function Post(props) {
    console.log(props);
    // console.log(props.sth);
    return <div onClick={()=>props.clickHandler(props.sth.id)}>
        <h4>{props.sth.title}</h4>
        <p>{props.sth.content}</p>
        <span>{props.sth.author}</span>
    </div>
}