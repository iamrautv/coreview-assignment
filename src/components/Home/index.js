import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount() {

  }

  navigate = (nav) => {
    const { history } = this.props;
    history.push(nav);
  }

  render() {
    return (
      <div className="wrap">
        <h1>Home</h1>
        <section>
          <button type="button" className="navigate-btn" onClick={() => { this.navigate('assignment1') }}>GoTo Assignment-1</button>
          <button type="button" className="navigate-btn" onClick={() => { this.navigate('assignment2') }}>GoTo Assignment-2</button>
        </section>
      </div>
    );
  }
}

export default withRouter(Home);