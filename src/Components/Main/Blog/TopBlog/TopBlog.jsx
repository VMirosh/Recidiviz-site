const TopBlog = (props) => {

    return(
        <div className="blog__title">
            <h3>{props.item.title}</h3>
            <button>{props.item.button}</button>
        </div>
    )
}
export default TopBlog;