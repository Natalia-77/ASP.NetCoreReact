
import React from 'react';

const HomePage = React.lazy(() => import("../components/home"));
const Register = React.lazy(() => import("../components/account/Registration"));
const Login = React.lazy(() => import("../components/account/Login"));
const ProdList = React.lazy(() => import("../components/products"));

const defaultRoutes = [
    { path: '/', exact: true, name: 'Головна', component: HomePage  },
    { path: '/register', exact: true, name: 'Реєстрація', component: Register  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/product', exact: true, name: 'Список товарів', component: ProdList  }
];
export default defaultRoutes;