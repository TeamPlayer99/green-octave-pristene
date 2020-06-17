import React, { Component } from 'react';
import Tags from './tags';
import ReviewPosts from './reviewPosts';



class Review extends Component {
    render() {
        return (
            <div className="right-panel-container">
                <div className="inner">
                    <div className="review-heading">
                        Reviews ({this.props.data.reviews.length})
                                      </div>
                    <div className="ratings-panel">
                        <div className="float-left">
                            <div className="rating-value">
                                {this.props.data.reviewRating + ".0"}
                            </div>
                            <div onClick={this.props.openRate} className="rating-star">
                            {
                                    
                                    this.props.data.stars.map((item) => (
                                        <span><i className={item.className}></i></span>
                                    ))
                            }
                             
                            </div>
                        </div>
                        <div className="float-right">
                            <div className="drop-down">
                                <select className="browser-default custom-select" id="filters" name="filters">
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
                    <ReviewPosts disLike={this.props.reviewDisLike} like={this.props.reviewLike}  open={this.props.open} reviews={this.props.data.reviews} />
                </div>
            </div>
        );
    }
}

export default Review