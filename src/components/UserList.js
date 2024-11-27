import React, { useState, useEffect } from 'react';
import { Button, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { getUsers, deleteUser } from '../apiService';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div>
      <Button component={Link} to="/users/new" variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Add New User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button component={Link} to={`/users/edit/${user.id}`}>Edit</Button>
                <Button onClick={() => handleDelete(user.id)} color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;