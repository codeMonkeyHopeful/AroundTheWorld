import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {updateUserLocation, updateUserImage} from '../Redux/index'



class Dashboard extends Component {

    //Pull IP info
    ipInfo = Axios.get('/api1')
    .then(res=> Axios.get(`http://api.ipstack.com/${this.props.ip}?access_key=${res.data}`))
    .then(info=> this.props.updateLocationInfo(info.data))
    .then(Axios.get('/api2'))
    .then(res => Axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${this.props.location.longitude}&lat=${this.props.location.latitude}&date=2016-08-01&cloud_score=False&api_key=DEMO_KEY`))
    //need to look into why /api2 isn't working
    .then(info=> this.props.updateImageInfo(info.data))
    .catch(e=> console.log(e))


    
    //Pull NASA info
    // ipInfo = 
    // .then(res=> Axios.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2016-08-01&cloud_score=False&api_key=DEMO_KEY`))
    // .then(info=> this.props.updateImageInfo(info.data))

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
    updateLocationInfo: (location) => dispatch(updateUserLocation(location)),
    updateImageInfo: (image) => dispatch(updateUserImage(image)) 

}
);

const mapState= state => ({
    ip: state.ip,
    location: state.location,
    image: state.image
});

export default connect(
    mapState,
    mapDispatch
  )(Dashboard);
