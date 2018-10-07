import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    let { user, show, index } = this.props;
    let visibility = show ? 'userCardShow' : 'userCard';

    if (show && index === 0) {
      visibility = 'userCardShow0';
    }

    let userName = `${user.name.first} ${user.name.last}`;

    return (
      <div className={visibility}>
        <div className="nameImageBox">
          <div className="userCardImageBox">
            <img className="userCardImage" src={user.picture.large} alt="" />
          </div>

          <div className="userNameBox">
            <div className="userName">{userName}</div>
          </div>
        </div>

        <div className="userDetailsBox">
          <div className="userDetails">
            {user.gender} | {user.cell}
            <br />
            {user.email} <br />
            City: {user.location.city} <br />
            Street: {user.location.street} <br />
            Nationality: {user.nat} <br />
            Date: {user.registered.date} <br />
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
