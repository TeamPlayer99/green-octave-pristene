import React, { Component } from 'react';
import Feeds from './feeds';
import Tags from './tags';

class Feedback extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            text: ''
        };

        this.updateNameChange = this.updateNameChange.bind(this);
        this.updateDescriptionChange = this.updateDescriptionChange.bind(this);

    }

    updateNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    updateDescriptionChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    postFeedBack = () => {
        this.props.addFeed(this.state);
        this.setState({
            name: '',
            text: ''
        });
        
    };

    render() {
        return (

            <div className="right-panel-container">
                <div className="inner">

                    <div className="ratings-panel">
                        <div className="float-left feedback">
                            Feedbacks ({this.props.data.feedBackData.length})
                                </div>
                        <div className="float-right">
                            <div className="tag-drop-down">
                                <select id="filters" name="filters">
                                    <option value="Most Recent">General</option>
                                    <option value="Oldest">Oldest</option>
                                    <option value="Name">Name</option>
                                </select>
                            </div>
                            <div className="tag-filter feedback">
                                Tag:
                                    </div>
                        </div>
                    </div>
                    <div className="feedback-name">
                        <input value={this.state.name}
                            onChange={this.updateNameChange} 
                                className="input" 
                                    type="text" 
                                        id="feedback-name-input" 
                                            placeholder="Name" />
                    </div>
                    <div className="feedback-description">
                        <textarea value={this.state.text} 
                            onChange={this.updateDescriptionChange}
                                className="input" 
                                    name="" 
                                        id="feedback-description-input" 
                                            cols="30" rows="10" 
                                                placeholder="Description">
                        </textarea>
                    </div>
                    <div className="feedback-post">
                        <button onClick={this.postFeedBack} className="feedback-post-button">Post</button>
                    </div>
                    <div className="ratings-panel">
                        <div className="float-left">
                            <div className="inner">
                                <div className="doesnt-have-a-class">
                                    <Tags tags={this.props.data.reviewTags} />
                                </div>
                            </div>
                        </div>
                        <div className="float-right">
                            <div className="drop-down">
                                <select id="filters" name="filters">
                                    <option value="Most Recent">Most Recent</option>
                                    <option value="Oldest">Oldest</option>
                                    <option value="Name">Name</option>
                                </select>
                            </div>
                            <div className="filter">
                                Sort by
                                    </div>
                        </div>
                    </div>
                    <Feeds feeds={this.props.data.feedBackData} />

                </div>
            </div>
        );
    }
}

export default Feedback