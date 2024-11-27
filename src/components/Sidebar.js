import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <List>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/roles">
          <ListItemText primary="Roles" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/permissions">
          <ListItemText primary="Permissions" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;