import React, { Component } from 'react';
import { connect } from 'react-redux';



class Home extends Component {

storeIP = (ip) => {
        console.log('testing')
    }
    

  render() {
    return (
        <div>
            <center>
              <form onSubmit={this.storeIP}>
         IP Address: 
            <input type = "text" name = "first_name" maxlength = "100" placeholder='Enter Your IP Here' />
         <br />
         <input type = "submit" />
      </form>
      </center>
        </div>
    );
  }
}

const mapDispatch = dispatch => ({
});

const mapState= state => ({
});

export default connect(
    mapState,
    mapDispatch
  )(Home);
