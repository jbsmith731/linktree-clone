import type { ActionArgs, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { createServerClient } from '@utils/helpers/supabase.server';

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const supabase = createServerClient({ request, response });

  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');
  const password2 = form.get('password2');

  console.log({ email, password });

  if (!email) {
    return json({ error: 'Email is required' });
  }

  if (!password) {
    return json({ error: 'Password is required' });
  }

  if (password !== password2) {
    return json({ error: 'Passwords do not match' });
  }

  const { error } = await supabase.auth.signUp({
    email: email as string,
    password: password as string,
  });

  if (error) {
    return json({ error: error.message });
  }

  // TODO: show success state with message about email
  // confirmation
  return redirect('/me', {
    headers: response.headers,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: 'Sign up',
  };
};

const Login = () => {
  const actionData = useActionData<typeof action>();
  console.log(actionData);
  return (
    <main>
      <h1>Create an account</h1>

      <Form method="post">
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <input name="password2" type="password" placeholder="verify password" />
        <button type="submit">Submit</button>

        {actionData?.error ? <p>{actionData.error}</p> : null}
      </Form>
    </main>
  );
};

export default Login;
