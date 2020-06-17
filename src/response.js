import React, { Component } from 'react';

class Responses extends Component {
    render() {
        return (
            <div id="overlay" style={{ display: this.props.style }}>

                <div onClick={this.props.close} className="overlay-panel">
                    <div className="inner">

                        <div className="reviews-container">
                            <div className="inner">
                                <div className="review-header">
                                    <div className="float-right review-text response-text">
                                        {this.props.selected.date}
                                    </div>
                                    <div className="float-left">
                                        {this.props.selected.name}
                                    </div>
                                </div>
                                <div className="rating-star-small">
                                    {
                                        this.props.selected.stars.map((item) => (
                                            <span><i className={item.className}></i></span>
                                        ))
                                    }
                                </div>
                                <div className="review-tile review-text">
                                    {this.props.selected.title}
                                </div>
                                <div className="review review-text">
                                    {this.props.selected.reviewText}
                                </div>
                                <div className="response">
                                    <div className="response-text">Was This Review Helpful?</div>
                                    <div className="response-value">
                                        &nbsp Responses ({this.props.selected.responses.length})
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
                                    <div className="like-value">({this.props.selected.likes})</div>
                                    <div className="like-value">({this.props.selected.disLikes})</div>
                                </div>
                                <div className="review-header">
                                    Response(s)
                                </div>
                                {
                                    this.props.selected.responses.map((item, index) => (

                                        <div className="reviews-response-container">
                                            <div className="inner">
                                                <div className="review-header">
                                                    <div className="float-right review-text response-text">
                                                        {item.date}
                                                    </div>
                                                    <div className="float-left">
                                                        {item.name}
                                                    </div>
                                                </div>
                                                <div className="review review-text top-padding">
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Responses