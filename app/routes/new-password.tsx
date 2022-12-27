import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
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

  // TODO: Show success message instead ?? I don't
  // really know what happens
  return redirect('/me');
};

const Login = () => {
  return (
    <main>
      <h1>New password</h1>

      <Form method="post">
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
};

export default Login;
