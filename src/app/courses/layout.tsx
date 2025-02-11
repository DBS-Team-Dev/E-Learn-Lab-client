'use client';

import Header from '@/shared/components/header';
import { AppSidebar } from '@/shared/components/sidebar';
import { SidebarUiProvider } from '@/shared/lib/providers';
import { useAppSelector } from '../_redux/store';
import { navItems } from '@/shared/lib/navigation';

export default function CoursesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useAppSelector((state) => state.auth.currentUser);
  const navigationItems = user ? navItems(user.role) : [];
  return (
    <SidebarUiProvider>
      <AppSidebar navItems={navigationItems} />
      <div className='flex w-full flex-col'>
        <Header />
        <main>{children}</main>
      </div>
    </SidebarUiProvider>
  );
}
