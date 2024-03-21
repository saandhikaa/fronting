// Dashboard.tsx
import { FC } from 'react';
import Dropdown from '../components/DropDown';
import { userNavigation } from '../routes';

const Dashboard: FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Dropdown
        text='Role Management'
        options={userNavigation.roleManagement}
      />
      <Dropdown
        text='User Management'
        options={userNavigation.userManagement}
      />
    </div>
  );
}

export default Dashboard;
