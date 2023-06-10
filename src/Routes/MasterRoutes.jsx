import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const Main = lazy(() => import('../components/layout/Main'));
const Error404 = lazy(() => import('../pages/Error404'));
const Campaign = lazy(() => import('../pages/Campaign'));

const MasterRoutes = () => {

    return useRoutes([
        {
            path: '/',
            element: <Main />,
            children: [
                { index: true, element: <Campaign /> },
                {
                    path: 'campaign',
                    element: <Campaign />
                }
            ]
        },
        { path: '*', element: <Error404 /> },
    ])
};

export default MasterRoutes;