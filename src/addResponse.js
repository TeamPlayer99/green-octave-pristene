import React, { Component } from 'react';

class AddResponse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Abdulgafar",
            date: "17/06/2020",
            text: ""
          }

          this.updateResponseChange = this.updateResponseChange.bind(this);
    }

    updateResponseChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    postResponse = () => {
        this.props.addResponse(this.state, this.props.likedReview);
        this.setState({
            name: "Abdulgafar Jagun",
            date: "17/06/2020",
            text: ""
        });
        this.props.close();
    };

    render() {
        return (
            <div id="respond-overlay" style={{ display: this.props.style }}>
                <div className="content-holder-ratings">
                    <div className="feedback-description">
                        <textarea
                            value={this.state.text}
                            onChange={this.updateResponseChange}
                            className="input"
                            name=""
                            id="ratings-review"
                            cols="30" rows="5"
                            placeholder="Response">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={() => this.postResponse()}>Respond</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddResponse