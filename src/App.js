import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import RoleList from './components/RoleList';
import PermissionModal from './components/PermissionModal';
import RoleForm from './components/RoleForm';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/components/Sidebar}
        <Sidebar />
        
        <div style={{ padding: '20px', width: '100%' }}>
          <Switch>
            {/components/UserForm}
            <Route path="/users" exact component={UserList} />
            <Route path="/users/new" component={UserForm} />
            <Route path="/users/edit/:id" component={UserForm} />

            {/components/RoleList}
            <Route path="/roles" component={RoleList} />
            
            {/components/PermissionModal}
            <Route path="/permissions" component={PermissionModal} />

            {/components/RoleForm}
            <Route path="/roles/edit/:id" component={RoleForm} />
            <Route path="/roles/new" component={RoleForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;