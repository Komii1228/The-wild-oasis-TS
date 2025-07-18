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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

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
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <GlobalStyles />
            <RouterProvider router={router} />

            <Toaster
                position="top-center"
                containerStyle={{
                    margin: '8px',
                }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: 'var(--color-grey-700)',
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
