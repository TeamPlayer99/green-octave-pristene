import React, { Component } from 'react';

class Responses extends Component {
    render() {
        return (
            <div id="overlay" style={{display:this.props.style}}>
    
            <div onClick={this.props.close} className="overlay-panel">
                <div className="inner">
    
                    <div className="reviews-container">
                        <div className="inner">
                            <div className="review-header">
                                <div className="float-right review-text response-text">
                                    01/05/2020
                                </div>
                                <div className="float-left">
                                    Abdulgafar Jagun
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
                                Review Title
                            </div>
                            <div className="review review-text">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </div>
                            <div className="response">
                                <div className="response-text">Was This Review Helpful?</div>
                                <div className="response-value">
                                    &nbsp Responses (20)
                                </div>
                            </div>
                            <div className="likes">
                                <div className="like-yes">Yes</div>
                                <div className="like-yes-icon">
                                    <img className="like-icon" src={require("./images/like-yes-svg.svg")} alt=""/>
                                </div>
                                <div className="like-no">No</div>
                                <div className="like-no-icon"><img className="like-icon" src={require("./images/like-no-svg.svg")} alt=""/></div>
                            </div>
                            <div className="like-values">
                                <div className="like-value">(15)</div>
                                <div className="like-value">(5)</div>
                            </div>
                            <div className="review-header">
                                Response(s)
                            </div>
                            <div className="reviews-response-container">
                                <div className="inner">
                                    <div className="review-header">
                                        <div className="float-right review-text response-text">
                                            01/05/2020
                                        </div>
                                        <div className="float-left">
                                            Abdulgafar Jagun
                                        </div>
                                    </div>
                                    <div className="review review-text top-padding">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}

export default Responses