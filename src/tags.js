import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return (
            <ul className="tags">
                {this.props.tags.map(tag => (
                    <li><a href="/">{tag}</a></li>
                ))}     
            </ul>
        );
    }
}

export default Tags