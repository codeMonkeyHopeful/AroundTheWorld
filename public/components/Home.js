import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUserIP} from '../Redux/index.js'
import Axios from 'axios';

class Home extends Component {


    storeIP = (event) => {
      event.preventDefault()
      this.props.updateIP(event.target.ip.value)
       this.props.history.push('/dashboard')

        }

        componentDidMount(){
          Axios.get('https://ipapi.co/json/') //pull users IP automatically and store on state
          .then(res => this.props.updateIP(res.data))
        }

  render() {
    return (
        <div>
            <center>
              <form onSubmit={this.storeIP}>
         IP Address: 
                <input type = "text" name ='ip' id = "ip"  value={this.props.ip}  />
         <br />
                <button type = "submit">Show Me More!</button>
             </form>
            </center>
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
  ip: state.ip.ip
});

export default connect(
    mapState,
    mapDispatch
  )(Home);
