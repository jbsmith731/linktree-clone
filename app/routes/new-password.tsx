import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createServerClient } from '@supabase/auth-helpers-remix';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@utils/constants/supabase';

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    request,
    response,
  });

  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');

  console.log({ email, password });

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

  return redirect('/me');
};

const Login = () => {
  const actionData = useActionData<typeof action>();
  console.log(actionData);
  return (
    <main>
      <h1>Login</h1>

      <Form method="post">
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
};

export default Login;