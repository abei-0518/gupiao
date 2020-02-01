import React, { Component } from 'react';
import request from '../ulits/request';
import { connect } from 'react-redux';

class Gupaio extends Component<any> {
    state = {
        data: [],
    };
    render() {
        return <div>1</div>;
    }
    componentDidMount() {
        request
            .get('finance/stock/shall?stock=&page=&type=&key=6aaf9466cbe2c6f236a601f347838e89')
            .then(res => {
                this.setState({
                    data: res.data.result.data,
                });
                this.props.Data(res.data.result.data);
            });
    }
}
export default connect(
    state => {
        return state;
    },
    dispatch => {
        return {
            Data(value: any) {
                dispatch({ type: 'DATA', data: value });
            },
        };
    }
)(Gupaio);
