import React, { Component } from 'react';
import Tags from './tags';



class Review extends Component {
    render() {
        return (
            <div className="right-panel-container">
                <div className="inner">
                    <div className="review-heading">
                        Reviews ({this.props.data.reviewNumber})
                                      </div>
                    <div className="ratings-panel">
                        <div className="float-left">
                            <div className="rating-value">
                                {this.props.data.reviewRating}
                            </div>
                            <div className="rating-star">
                                <span><i className="fa fa-star fa-lg"></i></span>
                                <span><i className="fa fa-star fa-lg"></i></span>
                                <span><i className="fa fa-star fa-lg"></i></span>
                                <span><i className="fa fa-star fa-lg"></i></span>
                                <span><i className="fa fa-star fa-lg"></i></span>
                            </div>
                        </div>
                        <div className="float-right">
                            <div className="drop-down">
                                <select id="filters" name="filters">
                                    <option value="Most Recent">Most Recent</option>
                                    <option value="Oldest">Oldest</option>
                                    <option value="Name">Name</option>
                                </select>
                            </div>
                            <div className="filter">
                                Sort by
                            </div>
                        </div>
                    </div>
                    <div className="tags-panel">
                        <div className="inner">
                            <div className="doesnt-have-a-class">
                                <Tags tags={this.props.data.reviewTags} />
                            </div>
                        </div>
                    </div>
                    <div className="reviews-container">
                        <div className="inner">
                            <div className="review-header">
                                <div className="float-right review-text response-text">
                                    {this.props.data.date}
                                </div>
                                <div className="float-left">
                                    {this.props.data.name}
                                </div>
                            </div>
                            <div className="rating-star-small">
                                <span><i className="fa fa-star fa-sm"></i></span>
                                <span><i className="fa fa-star fa-sm"></i></span>
                                <span><i className="fa fa-star fa-sm"></i></span>
                                <span><i className="fa fa-star fa-sm"></i></span>
                                <span><i className="fa fa-star fa-sm"></i></span>
                            </div>
                            <div className="review-tile review-text">
                                {this.props.data.title}
                            </div>
                            <div className="review review-text">
                                {this.props.data.reviewText}
                            </div>
                            <div className="response">
                                <div className="response-text">Was This Review Helpful?</div>
                                <div className="response-value">
                                    Responses ({this.props.data.responseNumber})
                                                  </div>
                            </div>
                            <div className="likes">
                                <div className="like-yes">Yes</div>
                                <div className="like-yes-icon">
                                    <img className="like-icon" src={require("./images/like-yes-svg.svg")} alt="" />
                                </div>
                                <div className="like-no">No</div>
                                <div className="like-no-icon"><img className="like-icon" src={require("./images/like-no-svg.svg")} alt="" /></div>
                            </div>
                            <div className="like-values">
                                <div className="like-value">({this.props.data.likes})</div>
                                <div className="like-value">({this.props.data.disLikes})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review