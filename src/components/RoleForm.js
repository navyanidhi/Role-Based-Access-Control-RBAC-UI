import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { addRole, updateRole } from '../apiService';
import { useHistory, useParams } from 'react-router-dom';

const RoleForm = () => {
  const [role, setRole] = useState({ name: '', description: '' });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      // Fetch the role by ID for editing
      // getRoleById(id).then(response => setRole(response.data)); // Simulate fetching role data
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateRole(id, role).then(() => history.push('/roles'));
    } else {
      addRole(role).then(() => history.push('/roles'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Role Name"
        value={role.name}
        onChange={(e) => setRole({ ...role, name: e.target.value })}
        fullWidth
        required
      />
      <TextField
        label="Description"
        value={role.description}
        onChange={(e) => setRole({ ...role, description: e.target.value })}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default RoleForm;