import { RoleOptions } from '@/features/users/auth/lib';
import { Users, BookOpen, NotepadText, House, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface Navigation {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}

const navigationAdminItems: Navigation[] = [
  {
    title: 'Учні',
    url: '/users',
    icon: Users,
  },
  {
    title: 'Курси',
    url: '/courses',
    icon: BookOpen,
  },
  {
    title: 'Уроки',
    url: '/lectures',
    icon: NotepadText,
  },
];

const navigationStudentItems: Navigation[] = [
  {
    title: 'Головна',
    url: '/home',
    icon: House,
  },
  {
    title: 'Курси',
    url: '/courses',
    icon: BookOpen,
  },
];

export const navItems = (role: RoleOptions) => {
  return role === 'Admin' ? navigationAdminItems : navigationStudentItems;
};
