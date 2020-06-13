import React, { Component } from 'react';
import Home from './Home';
import Vendor from './Vendor';

class App extends Component {
    state = {
        activePage: 'home'
    }

    getClicked = (clicked) => {
        this.setState((prevState) => {
            return {
                activePage: clicked
            };
        });
    };

    getPage = () => {
        let page;

        switch (this.state.activePage) {
            case 'home':
                page = <Home select={this.getClicked} />;
                break;
            case 'vendor':
                page = <Vendor />;
                break;
            default:
                page = <Home />;
        }
        return page
    }

    render() {
        return (
            this.getPage() 
        );
    }
}

export default App;