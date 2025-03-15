import React from 'react';

import { SidebarTrigger } from './sidebar';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-fit w-full bg-background-color-primary backdrop-blur'>
      <nav>
        <div className='mx-auto flex w-full flex-wrap items-center justify-between p-4'>
          <SidebarTrigger />
          <div>Logo</div>
        </div>
      </nav>
    </header>
  );
}
