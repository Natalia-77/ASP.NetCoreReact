import React from 'react';

const UserList = React.lazy(() => import("../components/users"));
const EditUser = React.lazy(() => import("../components/users/Edit/index"));
const DeleteUser = React.lazy(() => import("../components/users/Delete"));

const adminRoutes = [
    { path: '/admin/user', exact: true, name: 'Користувачі', component: UserList  },    
    { path: '/admin/user/edit/:id', name: 'Редагувати',component:EditUser},
    { path: '/admin/user/delete/:id', exact: true, name: 'Видалити',component:DeleteUser}
];
export default adminRoutes;