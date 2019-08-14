import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUserIP} from '../Redux/index.js'
import storetemp from '../Redux/index.js'

class Home extends Component {

    storeIP = (event) => {
      event.preventDefault()
      this.props.updateIP(event.target.ip.value)

        }

  render() {
    return (
        <div>
            <center>
              <form onSubmit={this.storeIP}>
         IP Address: 
                <input type = "text" name ='ip' id = "ip"  placeholder='Enter Your IP Here' />
         <br />
                <button type = "submit">Give me your info</button>
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
});

export default connect(
    mapState,
    mapDispatch
  )(Home);
