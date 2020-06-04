import React, { Component } from 'react'

class gallery extends Component {
    render() {
        return(
            <div class="right-panel-container">
                        <div class="inner">

                            <div class="review-heading">
                                Gallery
                            </div>
                            <div class="gallery-grid-container">
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-1.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-2.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-3.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-4.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-5.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-6.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-7.jpg")} alt=""/>
                                </div>
                                <div class="gallery-grid-item">
                                    <img src={require("./images/car-8.jpg")} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
        );

    };
}

export default gallery