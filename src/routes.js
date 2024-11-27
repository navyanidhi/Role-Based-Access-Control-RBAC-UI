import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Sidebar from './components/Sidebar';
import RoleList from './components/RoleList';
import PermissionModal from './components/PermissionModal';

const Routes = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', width: '100%' }}>
        <Switch>
          <Route path="/users" exact component={UserList} />
          <Route path="/users/new" component={UserForm} />
          <Route path="/users/edit/:id" component={UserForm} />
          <Route path="/roles" component={RoleList} />
          <Route path="/permissions" component={PermissionModal} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Routes;