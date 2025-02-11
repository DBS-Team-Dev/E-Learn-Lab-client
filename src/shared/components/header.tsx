import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SidebarTrigger } from './sidebar';

import Logo from '@/../public/logo.png';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 h-fit w-full bg-background-color-primary backdrop-blur'>
      <nav>
        <div className='mx-auto flex w-full flex-wrap items-center justify-between p-4'>
          <SidebarTrigger />
          <Link href={'/'} className='mx-auto w-1/12'>
            <Image src={Logo} width={0} height={0} alt='логотип' />
          </Link>
          <div>Logo</div>
        </div>
      </nav>
    </header>
  );
}
