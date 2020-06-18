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

var reviewData = {
  reviewTags: ['All', 'Scratches', 'Communication', 'Weather', 'Problem', 'Condition'],
  reviewRating: 1,
  stars: [],
  reviewNumber: 1,
  reviews: [{
    name: "Abdulgafar Jagun",
    date: "01/05/2020",
    title: "Review Title",
    reviewText: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    responseNumber: 3,
    likes: 16,
    disLikes: 4,
    rate: 4,
    stars: [],
    responses: [
      {
        name: "Abdulgafar Jagun",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        name: "Ik Ummuna",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
      {
        name: "Sam Akwe",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      }],
  },
  {
    name: "Abdulgafar Jagun",
    date: "01/05/2020",
    title: "Review Title",
    reviewText: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    responseNumber: 3,
    likes: 18,
    disLikes: 2,
    rate: 3,
    stars: [],
    responses: [{
      name: "Abdulgafar Jagun",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Ik Ummuna",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Sam Akwe",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }],
  }],
  feedBackData: [
    {
      name: "Abdulgafar Jagun",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Ik Ummuna",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Sam Akwe",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      name: "Tosin Adefila",
      date: "01/05/2020",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }
  ]


}

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'review',
      data: reviewData,
      modal: 'none',
      rateModal: 'none',
      responseModal: 'none',
      selectedReview: reviewData.reviews[0],
      likedIndex: 0,
      likedType: ''
    };

    reviewData.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= reviewData.reviewRating)
        reviewData.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        reviewData.stars.push({
          key: 1,
          className: "fa fa-star fa-lg inactive"
        })
    }
  }

  componentDidUpdate() {
    reviewData.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= reviewData.reviewRating)
        reviewData.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        reviewData.stars.push({
          key: 1,
          className: "fa fa-star fa-lg inactive"
        })
    }
  }

  updateSuperStars = () => {
    reviewData.stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= reviewData.reviewRating)
        reviewData.stars.push({
          key: 1,
          className: "fa fa-star fa-lg active"
        })
      else
        reviewData.stars.push({
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
      console.log("clicked reviews index: " + index + " was " + type );
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
    reviewData.feedBackData.unshift(feedBack);
    this.setState({
      data: reviewData
    });
  };

  postResponse = (response) => {
    var index = this.state.likedIndex;
    reviewData.reviews[index].responses.unshift(response);
    this.setState({
      data: reviewData
    });
  };

  addLike = (index) => {
    reviewData.reviews[index].likes++;
    this.setState({
      data: reviewData
    });
    this.showAddResponseModal(index, 'liked');
  }

  addDisLike = (index) => {
    reviewData.reviews[index].disLikes++;
    this.setState({
      data: reviewData
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
    reviewData.reviews.unshift(review);
    reviewData.reviews.forEach(review => {
      totalRate += review.rate;
      console.log(totalRate + " " + review.rate);
    });
    reviewData.reviewRating = totalRate / reviewData.reviews.length;
    reviewData.reviewRating = reviewData.reviewRating.toFixed(0);
    this.updateSuperStars();
    this.setState({
      data: reviewData
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
                  <img className="round" src={require("./images/Ellipse 5.jpg")} alt="" />
                </div>
                <div className="verify-image">
                  <img className="round" src={require("./images/Vector.jpg")} alt="" />
                </div>
              </div>
              <div className="vendor-name">Kangaroo Transport</div>
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
