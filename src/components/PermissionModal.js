import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Checkbox, FormControlLabel } from '@mui/material';
import { getPermissions } from '../apiService';

const PermissionModal = ({ open, onClose, roleId, onSave }) => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    getPermissions().then(response => {
      setPermissions(response.data);
    });
  }, []);

  const handlePermissionChange = (event, permissionId) => {
    const newSelectedPermissions = [...selectedPermissions];
    if (event.target.checked) {
      newSelectedPermissions.push(permissionId);
    } else {
      const index = newSelectedPermissions.indexOf(permissionId);
      if (index > -1) {
        newSelectedPermissions.splice(index, 1);
      }
    }
    setSelectedPermissions(newSelectedPermissions);
  };

  const handleSave = () => {
    onSave(roleId, selectedPermissions);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Assign Permissions to Role</DialogTitle>
      <DialogContent>
        {permissions.map(permission => (
          <FormControlLabel
            key={permission.id}
            control={
              <Checkbox
                checked={selectedPermissions.includes(permission.id)}
                onChange={(event) => handlePermissionChange(event, permission.id)}
                name={permission.name}
              />
            }
            label={permission.name}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PermissionModal;