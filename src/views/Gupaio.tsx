import React, { Component } from 'react';
import request from '../ulits/request';

export default class Gupaio extends Component {
    state = {
        data: [],
    };
    render() {
        return <div>{this.state.data}</div>;
    }
    componentDidMount() {
        request
            .get('finance/stock/shall?stock=&page=&type=&key=6aaf9466cbe2c6f236a601f347838e89')
            .then(res => {
                this.setState({
                    data: res.data.result.data,
                });
            });
    }
}
