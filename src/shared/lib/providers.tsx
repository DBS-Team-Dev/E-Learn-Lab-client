'use client';

import { store } from '@/app/_redux/store';
import { Provider } from 'react-redux';
import { SidebarProvider } from '../components/sidebar';

export function Providers({ children }: { children: React.ReactNode }) {
  return <StateProvider>{children}</StateProvider>;
}

function StateProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export function SidebarUiProvider({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
