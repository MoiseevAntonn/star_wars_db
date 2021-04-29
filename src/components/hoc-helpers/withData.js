import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends Component{

        state = {
            data : null,
            hasError: false,
            loaded: false
        };
    
        componentDidMount(){
            getData()
                .then((data)=>{
                    this.setState({
                        data,
                        loaded: true
                    })
                })
                .catch(()=>{
                    this.setState({
                        hasError: true
                    })
                })
        };

        render(){
            const {data, hasError, loaded} = this.state;

            if (hasError){
                return <ErrorIndicator/>
            }

            if (!data || !loaded){
                return <Spinner/> 
            };

            return <View {...this.props} data={data}/>
        }
    };
};

export default withData;