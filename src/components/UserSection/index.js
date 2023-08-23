import React, { Component } from 'react';
import User from '../User';
import SelectedUsers from '../SelectedUsers';
import UserList from '../UserList';
const users = [
  {
    id: 1,
    name: 'Арнольд Шварцнегер',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
    married: false
  },
  {
    id: 2,
    name: 'Илон Маск',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    married: false
  },
  {
    id: 3,
    name: 'Сильвестер Сталлоне',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg',
    married: true
  }
]

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users.map(user => ({
        ...user,
        isSelected: false
      })),
      selectedUserIds: []
    }
  }
  selectUser = (id) => {
    const { users, selectedUserIds } = this.state;
    const updatedUserIds = selectedUserIds.includes(id) ? selectedUserIds.filter(userId => userId !== id) : [...selectedUserIds, id];

    this.setState({
      selectedUserIds: updatedUserIds,
      users: users.map(user => ({
        ...user,
        isSelected: updatedUserIds.includes(user.id),
      })),
    });
  }
  render() {
    const { users, selectedUserIds} = this.state;
    const selectedUsers = users
    .filter(user => selectedUserIds.includes(user.id))
    .sort((a, b) => selectedUserIds.indexOf(a.id) - selectedUserIds.indexOf(b.id));

    return (
      <>
        <UserList users={users} selectUser={this.selectUser} />
        <SelectedUsers users={selectedUsers} selectUser={this.selectUser} />
      </>
    );
  }
}

export default UserSection;
