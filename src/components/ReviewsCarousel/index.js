// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  getUserDetails = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  getafterResults = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">Reviews</h1>
          <div className="profile-container">
            <button
              type="button"
              className="button"
              onClick={this.getafterResults}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div>
              <img src={imgUrl} alt={username} className="image" />
              <p className="name">{username}</p>
              <p>{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              className="button"
              onClick={this.getUserDetails}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
