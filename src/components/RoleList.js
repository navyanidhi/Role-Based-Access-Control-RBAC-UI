import React, { useState, useEffect } from 'react';
import { Button, Table, TableHead, TableBody, TableCell, TableRow, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { getRoles, deleteRole } from '../apiService';
import { Link } from 'react-router-dom';
import PermissionModal from './PermissionModal';

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [openPermissionModal, setOpenPermissionModal] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  useEffect(() => {
    getRoles().then(response => {
      setRoles(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteRole(id).then(() => {
      setRoles(roles.filter(role => role.id !== id));
    });
  };

  const handleOpenPermissions = (roleId) => {
    setSelectedRoleId(roleId);
    setOpenPermissionModal(true);
  };

  const handleClosePermissions = () => {
    setOpenPermissionModal(false);
    setSelectedRoleId(null);
  };

  const handleSavePermissions = (roleId, permissions) => {
    // Save the role permissions (you can implement API call to save)
    console.log(`Permissions for role ${roleId}: `, permissions);
    handleClosePermissions();
  };

  return (
    <div>
      <Button component={Link} to="/roles/new" variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Add New Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map(role => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.description}</TableCell>
              <TableCell>
                <Button component={Link} to={`/roles/edit/${role.id}`} style={{ marginRight: '10px' }}>Edit</Button>
                <Button onClick={() => handleDelete(role.id)} color="secondary">Delete</Button>
                <Button onClick={() => handleOpenPermissions(role.id)} color="primary">Manage Permissions</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PermissionModal
        open={openPermissionModal}
        onClose={handleClosePermissions}
        roleId={selectedRoleId}
        onSave={handleSavePermissions}
      />
    </div>
  );
};

export default RoleList;