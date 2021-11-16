
import React from 'react';

const HomePage = React.lazy(() => import("../components/home"));
const Register = React.lazy(() => import("../components/account/Registration"));
const Login = React.lazy(() => import("../components/account/Login"));
const ProdList = React.lazy(() => import("../components/products"));
const AddProduct=React.lazy(()=> import("../components/products/AddProduct/addproduct"));
const Card=React.lazy(()=> import("../components/products/Card/card"))

const defaultRoutes = [
    { path: '/', exact: true, name: 'Головна', component: HomePage  },
    { path: '/register', exact: true, name: 'Реєстрація', component: Register  },
    { path: '/login', exact: true, name: 'Вхід', component: Login  },
    { path: '/product', exact: true, name: 'Список товарів', component: ProdList  },
    { path: '/product/add', exact: true, name: 'Додати товар', component: AddProduct  },
    { path: '/basket', exact: true, name: 'Кошик', component: Card  },

];
export default defaultRoutes;