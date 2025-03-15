import AuthFormContainer from '@/features/users/auth/components/auth-form-container';

import Image from 'next/image';
import Logo from '../../public/logo.png';

export default function AuthPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background-color-primary'>
      <div className='mb-6 flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-bold text-text-color-primary'>Вітаємо у</h1>
        <div className='mx-auto my-6 w-7/12'>
          <Image src={Logo} width={0} height={0} alt='логотип' />
        </div>
      </div>
      <AuthFormContainer />
    </div>
  );
}
