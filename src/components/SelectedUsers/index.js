import React, { Component } from 'react';

class SelectedUsers extends Component {
  render() {
    const { users, selectUser } = this.props;
    const selectedUsers = users.filter(user => user.isSelected);
    const renderUsers = selectedUsers.map(user => <li key={user.id} onClick={() => { selectUser(user.id)}}>{user.name}</li>)

    return (
      <div>
        <h2>Selected users:</h2>
        <ul>{renderUsers}</ul>
      </div>
    );
  }
}

export default SelectedUsers;
