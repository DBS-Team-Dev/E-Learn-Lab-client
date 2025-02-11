'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useForm, valiForm } from '@modular-forms/react';
import { useAppDispatch, useAppSelector } from '@/app/_redux/store';

import { AuthRepository } from '../services';

import { Input } from '@/shared/components/input';
import { Button } from '@/shared/components/button';

import * as v from 'valibot';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputData, { Form, Field }] = useForm<LoginData>({
    validate: valiForm(LoginSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  const handleSubmit = (values: LoginData) => {
    void values;
    return dispatch(AuthRepository.loginUser());
  };

  useEffect(() => {
    if (authState.currentUser) {
      router.push('/home');
    }
  }, [authState.currentUser, router]);

  return (
    <div className='mb-12 w-full max-w-md rounded-lg px-6'>
      <Form onSubmit={(values) => handleSubmit(values)}>
        <div className='mb-6'>
          <label className='mb-2 block text-xs font-bold text-gray-700' htmlFor='email'>
            Імейл
          </label>
          <Field name='email'>
            {(field, props) => (
              <>
                <Input {...props} type='email' required placeholder='Введіть імейл' />
                <div>{field.error}</div>
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
                <Input {...props} type='password' required placeholder='Введіть пароль' />
                <div>{field.error}</div>
              </>
            )}
          </Field>
        </div>
        <div className='xss:justify-center mx-5 mb-4 flex justify-end'>
          <h6 className='xss:text-center text-xs xs:text-center'>
            Забули пароль?{' '}
            <Link className='text-xs text-text-color-secondary' href={'/'} replace={true}>
              Відновити пароль
            </Link>
          </h6>
        </div>
        <div className='mt-16 flex justify-center'>
          <Button type='submit' variant='default'>
            Увійти
          </Button>
        </div>
      </Form>
    </div>
  );
}
