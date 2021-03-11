import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  user: state.scratch.user,
});

class Navbar extends Component {
  render() {
    const { user } = this.props;
    //console.log(user);

    return (
      <div className="Navbar">
        <div>
        {user ? <a href="/auth/logout">Logout</a> : <Link to="/">Log in</Link>}
        
        </div>
        <div>
          <div>
        {user ? <p>Welcome back, {user.username}</p> : null}
        </div>
        <div>
        {user ? <p>YAKS: {user.votes}</p> : null}
        </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
