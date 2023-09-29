import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { SpinLoading } from './components/atoms';
import store from './redux/store';
import i18n from '@app/config/i18n';
import router from '@app/router';
import './main.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Suspense fallback={<SpinLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </I18nextProvider>
  </QueryClientProvider>,
);
