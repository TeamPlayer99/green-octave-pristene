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

var reviewData = {
  name: "Abdulgafar Jagun",
  date: "01/05/2020",
  title: "Review Title",
  reviewNumber: "1",
  reviewTags: ['All', 'Scratches', 'Communication', 'Weather', 'Problem', 'Condition'],
  reviewRating: "1.5",
  reviewText: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  responseNumber: "20",
  responses: [{
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
  likes: 15,
  disLikes: 5,
  modalShow: {},
  modalClose: {},
  feedBackData: [
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
    },
    {
      name: "Tosin Adefila",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }
  ]
}



class Vendor extends Component {

state = {
  activePage: 'review',
  data: reviewData,
  modal: 'none'
};

getClicked = (clicked) => {
  this.setState((prevState) => {
    return { 
      activePage: clicked,
      data: prevState.data
    };
  });
};

addLike = () => {
  this.setState(prevState => ({
    data: {                   
        ...prevState.data,    
        likes: prevState.data.likes++
    }
}))
}

addDisLike = () => {
  this.setState(prevState => ({
    data: {                   
        ...prevState.data,    
        disLikes: prevState.data.disLikes++
    }
}))
}

showModal = () => {
  this.setState({
    modal: 'block'
  });
  console.log(this.state.modal);
}

closeModal = () => {
  this.setState({
    modal: 'none'
  });
}

postFeedBack = (feedBack) => {
  reviewData.feedBackData.unshift(feedBack);
  this.setState({
    data: reviewData
  });
};


render() {

  this.state.data.modalShow = this.showModal;
  this.state.data.modalClose = this.closeModal;

  let page;

  switch(this.state.activePage) {
    case 'review':
      page = <Review like={this.addLike} disLike={this.addDisLike} data={this.state.data}/>;
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
      page = <Review data= {this.state.data}/>;
  }

    return (
      <div className="App">

        <Response close={this.closeModal} style={this.state.modal} />

        <div className="wrapper">
          <header>
            <div className="main-nav-bar">
              <div className="inner">
                <nav className="main-nav-bar-links">
                  <a href="/">Company</a>
                  <a href="/">How It Works</a>
                  <a href="/">Careers</a>
                  <a href="/">Press</a>
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
                    className={ this.state.activePage === 'review' ? "active-button unselectable" : "notActive unselectable"}>
                      Reviews</li>
                    <li onClick={() => this.getClicked('feedback')}
                    className={ this.state.activePage === 'feedback' ? "active-button unselectable" : "notActive unselectable"}>
                      Feedbacks</li>
                    <li onClick={() => this.getClicked('aboutUs')}
                    className={ this.state.activePage === 'aboutUs' ? "active-button unselectable" : "notActive unselectable"}>
                      About us</li>
                    <li onClick={() => this.getClicked('gallery')}
                    className={ this.state.activePage === 'gallery' ? "active-button unselectable" : "notActive unselectable"}>
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
