import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { addUser, updateUser } from '../apiService';
import { useHistory, useParams } from 'react-router-dom';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', status: 'Active' });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      // Fetch user data if editing
      // getUserById(id).then(response => setUser(response.data));  // Example API
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateUser(id, user).then(() => history.push('/users'));
    } else {
      addUser(user).then(() => history.push('/users'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </form>
  );
};

export default UserForm;
