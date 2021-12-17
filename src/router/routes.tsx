import Login from "../components/Login/index";
import SignUp from "../components/SignUp";

export const publicRoutes = [
  {
    path: '/login',
    title: 'Login',
    loadComponent: Login,
  },
  {
    path: '/register',
    title: 'SignUp',
    loadComponent: SignUp,
  },
];
