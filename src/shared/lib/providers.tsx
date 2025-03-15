'use client';

import { persister, store } from '@/app/_redux/store';
import { Provider } from 'react-redux';
import { SidebarProvider } from '../components/sidebar';

import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from '../components/loading';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate loading={<Loading />} persistor={persister}>
      <StateProvider>{children}</StateProvider>
    </PersistGate>
  );
}

function StateProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export function SidebarUiProvider({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
