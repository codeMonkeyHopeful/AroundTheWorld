import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserIP } from '../Redux/index.js';
import Axios from 'axios';

class Home extends Component {
  storeIP = event => {
    event.preventDefault();
    this.props.updateIP(event.target.ip.value);
    this.props.history.push('/dashboard');
  };

  componentDidMount() {
    Axios.get('https://ipapi.co/json/') //pull users IP automatically and store on state
      .then(res => this.props.updateIP(res.data));
  }

  render() {
    return (
      <div>
        <center>
          <div id='form-container'>
            <strong>
              <span id='title'>Location Finder</span>
            </strong>
            <form onSubmit={this.storeIP}>
              Your IP Address:
              <input type='text' name='ip' id='ip' value={this.props.ip} />
              <br />
              <button type='submit'>Show Me More!</button>
            </form>
            <p>
              'Location Finder' is a handful of compnents that can be integrated
              into your website, capturing the users IP on visit, pulling
              location information and storing for later use.
            </p>
            <strong>
              <p>Use responsibly</p>
            </strong>
          </div>
        </center>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  updateIP: ip => dispatch(updateUserIP(ip)),
});

const mapState = state => ({
  ip: state.ip.ip,
});

export default connect(
  mapState,
  mapDispatch
)(Home);
