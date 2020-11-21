import React, { Component } from "react";

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>OOOPS !! ERROR !!!</h1>;
    }

    return this.props.children;
  }
}

export default MyErrorBoundary;
