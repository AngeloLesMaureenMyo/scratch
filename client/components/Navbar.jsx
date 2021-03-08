import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
  user: state.scratch.user,
});

class Navbar extends Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div className="Navbar">
        {user ? <a href="/auth/logout">Logout</a> : <Link to="/">Log in</Link>}
        {user ? <p>Welcome back, {user.username}</p> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
