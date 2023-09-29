import { lazy } from 'react';

const PrivateLayout = lazy(() => import('@app/components/templates/PrivateLayout'));

const NotificationList = lazy(
  () => import('@app/pages/Notification/NotificationList/NotificationList'),
);

const UnknownDetail = lazy(() => import('@app/pages/Unknown/Unknown'));
const Staff = lazy(() => import('@app/pages/Staff/Staff'));

interface Route {
  element: JSX.Element;
  children?: Route[];
  path?: string;
}

const routes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <NotificationList />,
      },
      {
        path: 'unknowns',
        children: [
          {
            path: '',
            element: <NotificationList />,
          },
          {
            path: ':id',
            element: <UnknownDetail />,
          },
        ],
      },
      {
        path: 'staffs',
        children: [
          {
            path: '',
            element: <Staff />,
          },
        ],
      },
    ],
  } as Route,
];

export default routes;
