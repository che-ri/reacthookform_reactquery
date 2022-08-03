import React from "react";
import ErrorFallBack from "./ErrorFallBack";

const default_state = {
    has_error: false,
    error: null,
    error_info: null,
};

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = default_state;
    }
    componentDidCatch(error, error_info) {
        this.setState({ has_error: true, error, error_info });
    }

    reset() {
        this.setState(default_state);
        if (this.props.reset) this.props.reset();
    }
    render() {
        if (this.state.error)
            return (
                <ErrorFallBack
                    error={this.state.error}
                    error_info={this.state.error_info}
                    reset={this.reset.bind(this)}
                />
            );
        return this.props.children;
    }
}

export default ErrorBoundary;
