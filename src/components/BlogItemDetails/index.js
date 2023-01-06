// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const res = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await res.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItemDetails

    return (
      <div className="blog-item-details-cont">
        <h1>{title}</h1>
        <div className="bid-author">
          <img className="bid-img" alt={author} src={avatarUrl} />
          <p>{author}</p>
        </div>
        <img className="image" alt={title} src={imageUrl} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
