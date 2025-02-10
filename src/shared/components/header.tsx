import React from 'react';
import Link from 'next/link';
import { SidebarTrigger } from './sidebar';

export default function Header() {
  return (
    <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 h-fit w-full border-b backdrop-blur'>
      <nav className='border-gray-200 bg-white dark:bg-gray-900'>
        <div className='mx-auto flex w-full flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <span className='self-center whitespace-nowrap font-serif text-lg dark:text-white'>
              E-learn
            </span>
          </Link>
          <div className='flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <SidebarTrigger />
          </div>
        </div>
      </nav>
    </header>
  );
}
