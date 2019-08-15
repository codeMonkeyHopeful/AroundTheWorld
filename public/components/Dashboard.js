import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUserIP} from '../Redux/index.js'

class Dashboard extends Component {

    storeIP = (event) => {
      event.preventDefault()
      this.props.updateIP(event.target.ip.value)
      this.props.history.push('/test')
        }

  render() {
    return (
        <div>
            this is working
        </div>
    );
  }


}

const mapDispatch = dispatch => (
  {
    updateIP: (ip) => dispatch(updateUserIP(ip))
}
);

const mapState= state => ({
});

export default connect(
    mapState,
    mapDispatch
  )(Dashboard);
