import axios from 'axios';

// Simulating an API service
const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

// Mock data
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' }
];

const mockRoles = [
  { id: 1, name: 'Admin', description: 'Administrator role with full permissions' },
  { id: 2, name: 'User', description: 'Regular user with limited permissions' }
];

const mockPermissions = [
  { id: 1, name: 'Read' },
  { id: 2, name: 'Write' },
  { id: 3, name: 'Delete' }
];

// Simulated API Calls
export const getUsers = () => Promise.resolve({ data: mockUsers });
export const getRoles = () => Promise.resolve({ data: mockRoles });
export const getPermissions = () => Promise.resolve({ data: mockPermissions });
export const updateUser = (id, user) => Promise.resolve({ data: { ...user, id } });
export const addUser = (user) => Promise.resolve({ data: { ...user, id: mockUsers.length + 1 } });
export const deleteUser = (id) => Promise.resolve({ data: { id } });
export const addRole = (role) => Promise.resolve({ data: { ...role, id: mockRoles.length + 1 } });
export const updateRole = (id, role) => Promise.resolve({ data: { ...role, id } });
export const deleteRole = (id) => Promise.resolve({ data: { id } });
export const assignPermissionsToRole = (roleId, permissions) => Promise.resolve({ data: { roleId, permissions } });