import React, { Component } from "react";
import './style.css';
import './xvu6cdg.css';
import './css/all.min.css';
import './css/font-awesome.min.css';
import Review from './review';
import Feedbacks from './feedback';
import AboutUs from './about-us';
import Gallery from './gallery';
import Response from './response';
import Ratings from './ratings';
import AddResponse from './addResponse';


class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'review',
      data: this.props.vendor,
      modal: 'none',
      rateModal: 'none',
      responseModal: 'none',
      selectedReview: this.props.vendor.reviews[0],
      likedIndex: 0,
      likedType: ''
    };

    this.props.vendor.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= this.props.vendor.reviewRating)
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg inactive"
        })
    }
  }

  componentDidUpdate() {
    this.props.vendor.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= this.props.vendor.reviewRating)
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg inactive"
        })
    }
  }

  updateSuperStars = () => {
    this.props.vendor.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= this.props.vendor.reviewRating)
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        this.props.vendor.stars.push({
          key: 1,
          className: "fa fa-star fa-lg inactive"
        })
    }
  }

  getClicked = (clicked) => {
    this.setState((prevState) => {
      return {
        activePage: clicked,
        data: prevState.data
      };
    });
  };

  showModal = (review) => {
    this.setState({
      modal: 'block',
      selectedReview: review
    });
  }

  closeModal = () => {
    this.setState({
      modal: 'none'
    });
  }

  showAddResponseModal = (index, type) => {
    setTimeout(() => {
      this.setState({
        likedIndex: index,
        likedType: type,
        responseModal: 'block'
      });
      console.log("clicked reviews index: " + index + " was " + type);
    }, 3000)
  }

  closeAddResponseModal = () => {
    this.setState({
      responseModal: 'none'
    });
  }

  showRateModal = () => {
    this.setState({
      rateModal: 'block'
    });
  }

  closeRateModal = () => {
    this.setState({
      rateModal: 'none'
    });
  }

  postFeedBack = (feedBack) => {
    this.props.vendor.feedBackData.unshift(feedBack);
    this.setState({
      data: this.props.vendor
    });
  };

  postResponse = (response) => {
    var index = this.state.likedIndex;
    this.props.vendor.reviews[index].responses.unshift(response);
    this.setState({
      data: this.props.vendor
    });
  };

  addLike = (index) => {
    this.props.vendor.reviews[index].likes++;
    this.setState({
      data: this.props.vendor
    });
    this.showAddResponseModal(index, 'liked');
  }

  addDisLike = (index) => {
    this.props.vendor.reviews[index].disLikes++;
    this.setState({
      data: this.props.vendor
    });
    this.showAddResponseModal(index, 'disliked');
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

  postReview = (review) => {
    var totalRate = 0;
    this.setStars(review, "fa fa-star fa-sm");
    this.props.vendor.reviews.unshift(review);
    this.props.vendor.reviews.forEach(review => {
      totalRate += review.rate;
      console.log(totalRate + " " + review.rate);
    });
    this.props.vendor.reviewRating = totalRate / this.props.vendor.reviews.length;
    this.props.vendor.reviewRating = this.props.vendor.reviewRating.toFixed(0);
    this.updateSuperStars();
    this.setState({
      data: this.props.vendor
    });
  }

  getClickedStar = (value) => {
    this.setState((prevState) => {
      prevState.rates.forEach(element => {
        if (element.key <= value)
          element.className = "fa fa-star fa-2x active"

        else
          element.className = "fa fa-star fa-2x inactive"
      });
      return ({
        rate: value,
        rates: prevState.rates
      });
    });
  }

  goHome = () => {
  }

  render() {

    let page;

    switch (this.state.activePage) {
      case 'review':
        page = <Review reviewDisLike={this.addDisLike} reviewLike={this.addLike} openRate={this.showRateModal} open={this.showModal} data={this.state.data} />;
        break;
      case 'feedback':
        page = <Feedbacks addFeed={this.postFeedBack} data={this.state.data} />;
        break;
      case 'aboutUs':
        page = <AboutUs data={this.state.data} />;
        break;
      case 'gallery':
        page = <Gallery data={this.state.data} />;
        break;
      default:
        page = <Review reviewDisLike={this.addDisLike} reviewLike={this.addLike} openRate={this.showRateModal} open={this.showModal} data={this.state.data} />;
    }



    return (
      <div className="App">

        <Response selected={this.state.selectedReview} close={this.closeModal} style={this.state.modal} />

        <Ratings addReview={this.postReview} close={this.closeRateModal} style={this.state.rateModal} data={this.state.data} />

        <AddResponse likedIndex={this.state.likedIndex} likedType={this.state.likedType} addResponse={this.postResponse} close={this.closeAddResponseModal} style={this.state.responseModal} />

        <div className="wrapper">
          <header>
            <div className="main-nav-bar">
              <div className="inner">
                <nav className="main-nav-bar-links">
                  <a onClick={this.goHome} href="/">Directory</a>
                  <a href="/">How It Works</a>
                  <a href="/">Blog</a>
                </nav>
              </div>
            </div>
          </header>

          <div className="content">
            <div className="column left-column">
              <div className="dp-container">
                <div className="dp-image">
                  <img className="round" src={require(`${this.props.vendor.logoUrl}`)} alt="" />
                </div>
                {
                  this.props.vendor.verified ?
                    <div className="verification-review">
                      <span className="ratings fa-stack fa-2x">
                        <i className="fas fa-certificate fa-stack-2x"></i>
                        <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    :
                    ''
                }
              </div>
              <div className="vendor-name">{this.props.vendor.vendorName}</div>
              <div className="vendor-type">Car and Transport Provider</div>
              <div className="vendor-info">Information</div>
              <div className="trucks">
                <div className="trucks-image">
                  <img src={require("./images/trucks.svg")} alt="" />
                </div>
                              Trucks(20)

                          </div>
              <div className="drivers">
                <div className="trucks-image">
                  <img src={require("./images/drivers.svg")} alt="" />
                </div>
                              Drivers(20)
                          </div>
              <div className="trailer-type">
                Trailer Type
                          </div>
              <div className="trailer-type-tags-grid">
                <ul className="tags">
                  <li><a href="/">Dry Van</a></li>
                  <li><a href="/">Flat Bed</a></li>
                  <li><a href="/">Flat Bed</a></li>
                  <li><a href="/">Power Only</a></li>
                  <li><a href="/">Reefer</a></li>
                </ul>
              </div>
            </div>
            <div className="column right-column">
              <div className="inner">
                <nav className="right-panel-nav-bar">
                  <ul>
                    <li onClick={() => this.getClicked('review')}
                      className={this.state.activePage === 'review' ? "active-button unselectable" : "notActive unselectable"}>
                      Reviews</li>
                    <li onClick={() => this.getClicked('feedback')}
                      className={this.state.activePage === 'feedback' ? "active-button unselectable" : "notActive unselectable"}>
                      Feedbacks</li>
                    <li onClick={() => this.getClicked('aboutUs')}
                      className={this.state.activePage === 'aboutUs' ? "active-button unselectable" : "notActive unselectable"}>
                      About us</li>
                    <li onClick={() => this.getClicked('gallery')}
                      className={this.state.activePage === 'gallery' ? "active-button unselectable" : "notActive unselectable"}>
                      Gallery</li>
                  </ul>
                </nav>



                {page}

              </div>
            </div>
          </div>

          <footer>
            <div className="footer-nav-bar">
              <div className="inner">
                <nav className="footer-nav-bar-links">
                  <a href="/">Terms & Conditions</a>
                  <div className="report">
                    <a href="/">Report</a>
                  </div>
                </nav>
              </div>
            </div>
          </footer>

        </div>

      </div>
    );
  }
}

export default Vendor;
