import React, { Component } from 'react';

class Ratings extends Component {

    constructor(props){
        super(props);
        this.state = {
            review: {
                name: "Abdulgafar Jagun",
                date: "01/05/2020",
                title: "Review Title",
                reviewText: "",
                responseNumber: 0,
                likes: 0,
                disLikes: 0,
                rate: 0,
                stars: [],
                responses:[]
            },
            text:"",
            caret: true,
            rate: 0,
            rates: [
                {
                    key: 1,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 2,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 3,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 4,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 5,
                    className: "fa fa-star fa-2x inactive"
                }
            ]
        };

        this.updateReviewTextChange = this.updateReviewTextChange.bind(this);

    }

    updateReviewTextChange = (event) => {
        this.setState({
            review: Object.assign({}, this.state.review, {reviewText: event.target.value})
          });
    }

    postReview = () => {
        this.props.addReview(this.state.review); 
        this.setState({
            review: {
                name: "Abdulgafar Jagun",
                date: "01/05/2020",
                title: "Review Title",
                reviewText: "",
                responseNumber: 0,
                likes: 0,
                disLikes: 0,
                rate: 0,
                responses:[]
            },
            rate: 0,
            rates: [
                {
                    key: 1,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 2,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 3,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 4,
                    className: "fa fa-star fa-2x inactive"
                },
                {
                    key: 5,
                    className: "fa fa-star fa-2x inactive"
                }
            ]
        });
        this.props.close();
    };

    toggleDropDown = () => {
        this.setState({
            caret: !this.state.caret
        });
    }

    getClickedStar = (value) => {
        this.setState((prevState) => {
            prevState.rates.forEach(element => {
                if(element.key <= value)
                    element.className = "fa fa-star fa-2x active"
                    
                else
                    element.className = "fa fa-star fa-2x inactive"
            });
            return ({
                rate: value,
                rates: prevState.rates,
                review: {
                    ...prevState.review,
                    rate: value
                }
            });
        });
    }



    render() {
        var ratingDropDown, ratingDropUp, ratingtext;

        ratingDropDown = this.state.caret === true ? 'unset' : 'none';
        ratingDropUp = this.state.caret === true ? 'none' : 'unset';
        ratingtext = this.state.caret === true ? 'none' : 'block';

        return (
            <div id="ratings-overlay" style={{ display: this.props.style }}>

                <div className="ratings-overlay-panel">
                    <div className="info-card-ratings">
                        <div className="image-holder-ratings">
                            <img src={require('./images/place-holder-new.png')} style={{ width: '100%' }} alt="" />
                        </div>
                        <div className="verification-ratings">
                            <span class="ratings fa-stack fa-2x">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className="content-holder-ratings">
                            <h6>Kangaroo Transport</h6>
                            <div className="star-rating-panel">
                                <div className="star-rating-value-float-left">{this.state.rate}.0</div>

                                {
                                    
                                    this.state.rates.map((item, index) => (
                                        <span key={item.key.toString()} onClick={this.getClickedStar.bind(this, item.key)} className={item.className}></span>
                                    ))
                                }


                            </div>
                            <div onClick={this.toggleDropDown} className="ratings-drop-down">
                                <i id="caret-up" className="fas fa-caret-up fa-xs" style={{ display: ratingDropUp }}></i>
                                <i id="caret-down" className="fas fa-caret-down fa-xs" style={{ display: ratingDropDown }}></i>
                            </div>
                            <div className="feedback-description">
                                <textarea
                                    value={this.state.review.reviewText}
                                    onChange={this.updateReviewTextChange}
                                    className="input"
                                    name=""
                                    id="ratings-review"
                                    cols="30" rows="5"
                                    placeholder="Review"
                                    style={{ display: ratingtext }}>
                                </textarea>
                            </div>
                            <div>
                                <button onClick={this.postReview}>Rate</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    };
}

export default Ratings