import React from 'react';
import Card from '../UI/Card';

const AddUserList = props => {
  return (
    <Card>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default AddUserList;