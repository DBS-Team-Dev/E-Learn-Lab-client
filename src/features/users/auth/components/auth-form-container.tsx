'use client';

import { useForm, valiForm } from '@modular-forms/react';
import * as v from 'valibot';
import { Button } from '@/shared/components/button';
import { Input } from '@/shared/components/input';
import { AuthRepository } from '../services';
import { useAppDispatch, useAppSelector } from '@/app/_redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.email('Введена адреса не є справжньою e-mail адресою.'),
    v.nonEmpty('Будь ласка введіть вашу e-mail адресу.'),
  ),
  password: v.pipe(v.string(), v.nonEmpty('Будь ласка введіть ваш пароль.')),
});

type LoginData = v.InferOutput<typeof LoginSchema>;

export default function AuthFormContainer() {
  const [inputData, { Form, Field }] = useForm<LoginData>({
    validate: valiForm(LoginSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  const handleSubmit = (values: LoginData) => {
    return dispatch(AuthRepository.loginUser({ login: values.email, password: values.password }));
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      router.push('/home');
    }
  }, [authState.isLoggedIn, router]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-100 to-slate-600'>
      <div className='m-12 w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mx-4 mb-12 text-center text-2xl font-bold'>Вхід в особистий кабінет</h2>
        <Form onSubmit={(values) => handleSubmit(values)}>
          <div className='mb-6'>
            <label className='mb-2 block text-xs font-bold text-gray-700' htmlFor='email'>
              E-mail пошта
            </label>
            <Field name='email'>
              {(field, props) => (
                <>
                  <Input {...props} type='email' required />
                  {field.error && <div>{field.error}</div>}
                </>
              )}
            </Field>
          </div>
          <div className='mb-6'>
            <label className='mb-2 block text-xs font-bold text-gray-700' htmlFor='password'>
              Пароль
            </label>
            <Field name='password'>
              {(field, props) => (
                <>
                  <Input {...props} type='password' required />
                  {field.error && <div>{field.error}</div>}
                </>
              )}
            </Field>
          </div>
          <div className='mb-4 flex justify-end'>
            <h6 className='text-xs'>
              Забули пароль?{' '}
              <Link className='text-xs text-blue-700' href={'/'}>
                Відновити пароль
              </Link>
            </h6>
          </div>
          <Button type='submit' width='full'>
            Увійти
          </Button>
        </Form>
      </div>
    </div>
  );
}
