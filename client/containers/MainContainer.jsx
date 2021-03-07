/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders...
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import FriendsContainer from './FriendsContainer.jsx';

// import from child components...

const mapStateToProps = (state) => ({
  // provide pertinent state here
  // totalFriends: state.friends.totalFriends,
});


const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     
    //return(
      // <div className="container">
      //   <div className="outerBox">
      //     <h1 id="header">KEEP TRACK OF FRIENDS!</h1>
          
      //     {/* TOTALS DISPLAY */}
      //     <div className="innerbox" id="totals">
      //       <label htmlFor="totalFriends">Total Friends:</label>
      //       <span id="totalFriends">{this.props.totalFriends}</span>
      //     </div>

      //     {<FriendsContainer/>}
        
      //   </div>
      // </div>
    //);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);