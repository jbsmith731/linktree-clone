import * as Input from '@components/Input';
import { button } from '@primitives/button';
import { errorText } from '@primitives/error-text';
import { formBase } from '@primitives/form-base';
import { headingText } from '@primitives/heading-text';

import type { ActionArgs, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData, useTransition } from '@remix-run/react';
import { createServerClient } from '@utils/helpers/supabase.server';

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const supabase = createServerClient({ request, response });

  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');

  if (!email) {
    return json({ error: 'Email is required' });
  }

  if (!password) {
    return json({ error: 'Password is required ' });
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) {
    return json({ error: error.message });
  }

  return redirect('/me', {
    headers: response.headers,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: 'Login',
  };
};

const Login = () => {
  const { error } = useActionData<typeof action>() ?? {};
  const { state } = useTransition();
  const submitting = state === 'submitting';

  return (
    <main className="h-screen flex bg-slate-100 px-4">
      <div className="m-auto grid grid-flow-row gap-6 max-w-md w-full">
        <h1 className={headingText({ size: 6 })}>Login</h1>
        <Form
          method="post"
          className={formBase({
            className:
              'max-w-md px-4 py-8 md:p-10 m-auto w-full bg-white rounded-xl shadow-lg',
          })}
        >
          <Input.Root>
            <Input.Label>Email</Input.Label>
            <Input.Input name="email" type="text" placeholder="email" />
          </Input.Root>

          <Input.Root>
            <Input.Label>Password</Input.Label>
            <Input.Input
              name="password"
              type="password"
              placeholder="password"
            />
          </Input.Root>

          {error ? <p className={errorText()}>{error}</p> : null}
          <button className={button()} type="submit" disabled={submitting}>
            {submitting ? 'Loading' : 'Login'}
          </button>

          <small className="text-sm">
            <Link className="underline hover:text-blue-700" to="/new-password">
              Forgot password
            </Link>
          </small>
        </Form>
      </div>
    </main>
  );
};

export default Login;
