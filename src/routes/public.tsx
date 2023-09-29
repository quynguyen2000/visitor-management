import PublicLayout from '@app/components/templates/PublicLayout';

const routes = [
  {
    element: <PublicLayout />,
    children: [{ path: 'login' }],
  },
];

export default routes;
