import React, { Component } from 'react';

class ReviewPosts extends Component {

    constructor(props) {
        super(props);

        this.props.reviews.forEach(element => {
            this.setStars(element, "fa fa-star fa-sm");
        });
        console.log("component started");
    }

    likeReview = (index) => {
        this.props.like(index);
    }

    disLikeReview = (index) => {
        this.props.disLike(index);
    }

    setStars = (review, className) => {
        review.stars = [];
        for (var i = 1; i <= 5; i++) {
            if (i <= review.rate)
                review.stars.push({
                    key: 1,
                    className: className + " active"
                })
            else
                review.stars.push({
                    key: 1,
                    className: className + " inactive"
                })
        }
    }

    render() {
        return (  

            this.props.reviews.map((review, index) => (
                
                <div className="reviews-container">
                    <div className="inner">
                        <div className="review-header">
                            <div className="float-right review-text response-text align-text-right">
                                {review.date}
                            </div>
                            <div className="float-left">
                                {review.name}
                            </div>
                        </div>
                        <div className="rating-star-small">
                            {
                                review.stars.map((item) => (
                                    <span><i className={item.className}></i></span>
                                ))
                            }
                        </div>
                        <div className="review-tile review-text align-text-left">
                            {review.title}
                        </div>
                        <div className="review review-text">
                            {review.reviewText}
                        </div>
                        <div className="response">
                            <div className="response-text">Was This Review Helpful?</div>
                            <div onClick={() => this.props.open(review)} className="response-value unselectable">
                                Responses ({review.responses.length})
                                                  </div>
                        </div>
                        <div className="likes">
                            <div className="like-yes">Yes</div>
                            <div className="like-yes-icon">
                                <img onClick={() => this.likeReview(index)} className="like-icon" src={require("./images/like-yes-svg.svg")} alt="" />
                            </div>
                            <div className="like-no">No</div>
                            <div className="like-no-icon"><img onClick={() => this.disLikeReview(index)} className="like-icon" src={require("./images/like-no-svg.svg")} alt="" /></div>
                        </div>
                        <div className="like-values">
                            <div className="like-value">({review.likes})</div>
                            <div className="like-value">({review.disLikes})</div>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

export default ReviewPosts