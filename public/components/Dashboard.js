import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { updateUserLocation, updateUserImage } from '../Redux/index';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

class Dashboard extends Component {
  //Pull IP info
  componentDidMount() {
    const ipInfo = Axios.get('/api1')
      .then(res =>
        Axios.get(
          `http://api.ipstack.com/${this.props.ip}?access_key=${res.data}`
        )
      )
      .then(info => this.props.updateLocationInfo(info.data))
      .then(Axios.get('/api2'))
      .then(res =>
        Axios.get(
          `https://api.nasa.gov/planetary/earth/imagery/?lon=${
            this.props.location.longitude
          }&lat=${
            this.props.location.latitude
          }&date=2016-08-01&cloud_score=False&api_key=DEMO_KEY`
        )
      )
      //need to look into why /api2 isn't working
      .then(info => this.props.updateImageInfo(info.data))
      .catch(e => console.log(e));
  }

  render() {
    const test = {
      boarderStyle: 'solid',
    };
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>You Are Here</th>
              <td>
                <a href={this.props.image.url}>
                  <img src={this.props.image.url} />
                </a>
              </td>
            </tr>
            <tr>
              <th style={test}>Latitude</th>
              <td>{this.props.location.latitude}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{this.props.location.longitude}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{this.props.location.city}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{this.props.location.region_name}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{this.props.location.zip}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{this.props.location.country_name}</td>
            </tr>
            <tr>
              <th>IP</th>
              <td>{this.props.location.ip}</td>
            </tr>
          </tbody>
        </table>
        <center>
          <span>
            <strong>*All images provided by NASA satelite services</strong>
          </span>
        </center>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  updateLocationInfo: location => dispatch(updateUserLocation(location)),
  updateImageInfo: image => dispatch(updateUserImage(image)),
});

const mapState = state => ({
  ip: state.ip,
  location: state.location,
  image: state.image,
});

export default connect(
  mapState,
  mapDispatch
)(Dashboard);
