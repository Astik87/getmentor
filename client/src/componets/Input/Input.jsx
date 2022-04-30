import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    validate = (e) => {
        const {value} = e.target,
            {max, min, type, callback} = this.props;
        let isValid = true;

        if (type == 'email') {
            const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = !!String(value).toLowerCase().match(reg);
        }

        if (min && isValid)
            isValid = value.length >= min;
        if (max && isValid)
            isValid = value.length >= min;

        callback && callback(e, isValid);
        this.setState({value: value})

    }

    render() {
        return (
            <input type={this.props.type} className={this.props.className} id={this.props.id} value={this.state.value} onInput={this.validate} />
        );
    }
}

export default Input;