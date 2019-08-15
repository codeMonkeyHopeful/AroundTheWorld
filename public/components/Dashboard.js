import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {updateUserLocation} from '../Redux/index'


class Dashboard extends Component {

    ipInfo = Axios.get('/api1')
    .then(res=> Axios.get(`http://api.ipstack.com/${this.props.ip}?access_key=${res.data}`))
    .then(info=> this.props.updateLocationInfo(info.data))

    imageInfo = Axios.get(`http://api.ipstack.com/${this.props.ip}?access_key=fafbee55e815cc083f5391158fcc3ddf`)
    .then(res => this.props.updateLocationInfo(res.data))
    .catch(e=> console.log(e))

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
    updateLocationInfo: (location) => dispatch(updateUserLocation(location))
}
);

const mapState= state => ({
    ip: state.ip,
    location: state.location
});

export default connect(
    mapState,
    mapDispatch
  )(Dashboard);
