import Header from '@/shared/components/header';
import { AppSidebar } from '@/shared/components/sidebar';
import { SidebarUiProvider } from '@/shared/lib/providers';

export default function CoursesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarUiProvider>
      <AppSidebar />
      <div className='flex w-full flex-col'>
        <Header />
        <main>{children}</main>
      </div>
    </SidebarUiProvider>
  );
}
