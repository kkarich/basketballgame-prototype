import React, { Component } from 'react';
export default class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.count !== this.state.count) {
            this.setState({ count: nextProps.count });
        }
    }

    renderLight() {
        let count = this.state.count;
        if (count) {
            let lightColor = this.getLightColor(count);
            return <div className={"light " + lightColor} onClick={() => { this.props.handleClick() }} >
                        { this.state.count }
                    </div>;
        } else {
            return '';
        }
    }

    getLightColor(count) {
        switch (count) {
            case 1:
                return 'red';
                break;
            case 2:
                return 'blue';
                break;
            case 3:
                return 'green';
                break;
            default:
                break;
        }
    }

    render() {
        return this.renderLight();
    }
}