export const routes = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  user: {
    viewUser: '/dashboard/user/viewuser',
    addUser: '/dashboard/user/adduser',
    viewRole: '/dashboard/user/viewrole',
    addRole: '/dashboard/user/addrole',
  },
  // ...other routes
};

export const userNavigation = {
  roleManagement: [
    { label: 'View Role', path: routes.user.viewRole },
    { label: 'Add Role', path: routes.user.addRole },
  ],
  userManagement: [
    { label: 'View User', path: routes.user.viewUser },
    { label: 'Add User', path: routes.user.addUser },
  ]
  // ...other dropdown options
};
