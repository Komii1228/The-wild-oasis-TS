import { createBrowserRouter, RouterProvider } from 'react-router';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Cabins from './pages/Cabins';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import AppLayout from './ui/AppLayout';
import Users from './pages/Users';
import Bookings from './pages/Bookings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'bookings',
                element: <Bookings />,
            },
            {
                path: 'cabins',
                element: <Cabins />,
            },
            {
                path: 'Users',
                element: <Users />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
            {
                path: 'account',
                element: <Account />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]);

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
