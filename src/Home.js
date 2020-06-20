import React, { Component } from "react";
import './style.css';
import './xvu6cdg.css';
import './css/all.min.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.initialize();
    }

    initialize = () => {
        this.props.data.vendors.forEach(element => {
            this.setStars(element, "fa fa-star");
            console.log(element);
        });

    }

    getImage = (url) => {
        require(url);
    }

    setStars = (review, className) => {
        review.stars = [];
        for (var i = 1; i <= 5; i++) {
            if (i <= review.reviewRating)
                review.stars.push({
                    key: i,
                    className: className + " active"
                })
            else
                review.stars.push({
                    key: i,
                    className: className + " inactive"
                })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="all">

                    <div className="header">
                        <div className="header-top">
                            <div className="container spread-info">
                                <div className="inner">
                                    <ul className="wide-flat">
                                        <li><i className="far fa-clock"></i>Request Call Back (9am-6pm)</li>
                                        <li><i className="fas fa-phone"></i>+91-8570-80-09-11</li>
                                        <li><i className="fas fa-phone"></i>+91-8882-08-08-08</li>
                                        <li><i className="fas fa-at"></i>info@trucksuvidha.com</li>
                                    </ul>
                                </div>
                                <div className="header-top-right">
                                    News/Blog
    </div>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <div className="container spread-info">
                                <div className="logo">
                                    <img src={require('./images/kangaroo-logo.png')} style={{ width: '100%' }} alt="" />
                                </div>
                                <div className="search-section-outer">
                                    <div className="search-section">
                                        <div className="search-space">
                                            <input className="search-text" type="text" placeholder="" />
                                        </div>
                                        <div className="search-button">
                                            <img className="right-padding" src={require('./images/bi_search.svg')} style={{ height: '13px' }} alt="" /> Search
            </div>
                                    </div>
                                </div>
                                <div className="profile">
                                    <img className="right-padding" src={require('./images/Ellipse-15.png')} style={{ height: '20px' }} alt="" />
                                    <span>Abdulgafar Jagun</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sub-header">
                        <div className="container spread-info">
                            <div className="center-info">
                                <div className="menu-item">
                                    <h6>Post <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Board <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Directory
        </h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Packages <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Calculator <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Health Center <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                                <div className="menu-item">
                                    <h6>Services <i className="fas fa-sort-down fa-xs"></i></h6>
                                    <div className="sub-menu">
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                        <div className="sub-item"><a href="/">Menu Item</a></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="contact-us-sub-header">
                                    <h6>Contact Us</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="sort-area">

                        <div className="tag-drop-down">
                            Sort By &nbsp;
<select className="browser-default custom-select" id="filters" name="filters">
                                <option value="Most Recent">General</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Name">Name</option>
                            </select>
                        </div>
                    </div>



                    <div className="container hide-overflow">
                        <div className="dashboard-grid">


                            <div className="side-bar">
                                <div className="side-barcontent">
                                    <div className="sidebar-toggle"><i className="fas fa-bars"></i></div>
                                    <div className="filter-area">
                                        <div className="spread-info">
                                            <h5>Filter</h5>
                                            <button className="filter-button">Go</button>
                                        </div>
                                        <div className="spread-info mt2">
                                            <h6>Category</h6><i className="fas fa-sort-down fa-xs"></i>

                                        </div>
                                        <div>
                                            <input type="radio" value="" name="category" /> Transporter
                <br />
                                            <input type="radio" value="" name="category" /> Parkers and Movers
            </div>
                                        <div className="spread-info mt2">
                                            <h6>Transport Types</h6>
                                        </div>
                                        <div>
                                            <input type="checkbox" value="" name="category" /> Fleet Owner
                <br />
                                            <input type="checkbox" value="" name="category" /> Transporter Contractor
                <br />
                                            <input type="checkbox" value="" name="category" /> Commision Agent
                <br />
                                            <input type="checkbox" value="" name="category" /> Transport Broker
            </div>
                                        <div className="spread-info mt2">
                                            <h6>Area</h6><i className="fas fa-sort-down fa-xs"></i>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Pincode" name="category" />
                                            <br />
                                            <input type="text" placeholder="State" name="category" />
                                            <br />
                                            <input type="text" placeholder="District" name="category" />
                                            <br />
                                            <input type="text" placeholder="City" name="category" />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-content">
                                <div className="row">

                                    {
                                        this.props.data.vendors.map((item) => (

                                            <div className="col-lg-4 col-md-6">
                                                <div className="info-card">
                                                    <div className="image-holder">
                                                        <img src={require(`${item.logoUrl}`)}  alt="" />
                                                    </div>
                                                    {
                                                        item.verified ?
                                                            <div className="verification">
                                                                <span className="fa-stack fa-2x">
                                                                    <i className="fas fa-certificate fa-stack-2x"></i>
                                                                    <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                                                                </span>
                                                            </div>
                                                            :
                                                            ''
                                                    }
                                                    <div className="content-holder">
                                                        <h6>{item.vendorName}</h6>
                                                        <p><small>{item.address}</small></p>
                                                        <div>
                                                            <button onClick={() => this.props.select(item)} >View</button>
                                                        </div>
                                                        <p>
                                                            {
                                                                item.stars.map((star) => (
                                                                    <span key={star.key}><i className={star.className}></i></span>
                                                                ))
                                                            }
                                                            
                                                        </p>
                                                        <div className="container spread-info reviews">
                                                            <div>
                                                                <span className="reduced bold">{item.reviews.length + " "} reviews</span>
                                                            </div>
                                                            <div>
                                                                <i className="fas fa-comment-dots"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }





                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container footer-spread">
                            <div className="footer-logo">
                                <img src={require('./images/kangaroo-logo.png')} style={{ width: '100%' }} alt="" />
                            </div>
                            <div className="footer-grid">
                                <div className="footer-section">
                                    <span className="faint">About Company</span>
                                    <p><a href="/">Home</a></p>
                                    <p><a href="/">About us</a></p>
                                    <p><a href="/">Packages</a></p>
                                    <p><a href="/">Contact us</a></p>
                                    <p><a href="/">Dictionary</a></p>
                                    <p><a href="/">Login</a></p>
                                    <p><a href="/">Register</a></p>
                                    <p><a href="/">Our Network</a></p>
                                </div>
                                <div className="footer-section">
                                    <span className="faint">Policy Info</span>
                                    <p><a href="/">FAQ</a></p>
                                    <p><a href="/">Private Policy</a></p>
                                    <p><a href="/">Terms of Service</a></p>
                                    <p><a href="/">Disclamier</a></p>
                                    <p><a href="/">Copy right </a></p>
                                    <p><a href="/">Career</a></p>
                                    <p><a href="/">Sitemap</a></p>
                                    <p><a href="/">News/Blog</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;