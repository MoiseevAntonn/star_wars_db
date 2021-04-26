import React, {Component} from "react";

import "./error-boundry.css";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render(){
        const {hasError} = this.state;

        if (hasError){
            return <span>Error</span>
        }

        return this.props.children;
    }
};
