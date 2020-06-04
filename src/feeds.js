import React, { Component } from 'react';

class Feeds extends Component {
    render() {
        return (
            this.props.feeds.map(feed => (
                <div className="reviews-container">
                    <div className="inner">
                        <div className="review-tile review-text">
                            {feed.name}
                        </div>
                        <div className="review review-text">
                            {feed.text}
                        </div>
                    </div>
                </div>
            ))
        );
    }
}

export default Feeds