// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link className="blog-items" to={`/blogs/${id}`}>
      <img className="bi-img" alt={`item${id}`} src={imageUrl} />
      <div className="details">
        <h1 className="topic">{topic}</h1>
        <h1 className="title">{title}</h1>
        <div className="avatar">
          <img className="av-img" alt={`avatar${id}`} src={avatarUrl} />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
