import React, { Component } from 'react'

import { connect } from 'react-redux';


class Welcome extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="welcome">
        <h1>Welcome to Fridgy</h1>
      </div>
    )
  }
}


export default connect()(Welcome);