import * as Input from '@components/Input';
import { button } from '@primitives/button';
import { formBase } from '@primitives/form-base';
import { headingText } from '@primitives/heading-text';
import type { ActionArgs, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useOutletContext,
  useTransition,
} from '@remix-run/react';
import type { SupabaseContext } from '@routes/__auth';
import { createServerClient } from '@utils/helpers/supabase.server';

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  const { method } = request;
  const form = await request.formData();
  const formData = Object.fromEntries(form);

  const { id, ...sendData } = formData;

  const supabase = createServerClient({ request, response });

  let data = null;
  let error = null;

  if (method === 'POST') {
    const create = await supabase.from('profile').insert([sendData]);

    if (create.data) {
      data = create.data;
    }

    if (create.error) {
      error = create.error.message;
    }
  }

  if (method === 'PATCH') {
    const update = await supabase.from('profile').update(sendData).eq('id', id);

    if (update.data) {
      data = update.data;
    }

    if (update.error) {
      error = update.error.message;
    }
  }

  return json({ data, error });
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = createServerClient({ request, response });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: profile } = await supabase
    .from('profile')
    .select(
      `
      id, 
      slug,
      display_name,
      link(id, display_text, url)
      `
    )
    .eq('user', session?.user.id)
    .single();

  return {
    profile,
  };
};

export const meta: MetaFunction = () => {
  return {
    title: 'My tree',
  };
};

const Me = () => {
  const { profile } = useLoaderData<typeof loader>();
  const { error: actionError } = useActionData<typeof action>() ?? {};
  const { session } = useOutletContext<SupabaseContext>();
  const { id: userId } = session?.user ?? {};
  const { state } = useTransition();

  const submitting = state === 'submitting';

  return (
    <main className="py-20">
      <div className="grid grid-flow-row gap-6 max-w-lg mx-auto">
        <div className="grid grid-flow-row gap-1">
          <h1 className={headingText({ size: 6 })}>
            {profile ? 'Edit' : 'Create'} my tree
          </h1>

          {profile?.slug ? (
            <Link to={`/${profile.slug}`}>View my tree</Link>
          ) : null}
        </div>

        <Form className={formBase()} method={profile ? 'patch' : 'post'}>
          <input type="hidden" name="user" value={userId} />
          <input type="hidden" name="id" value={profile?.id} />
          <Input.Root>
            <Input.Label>Slug</Input.Label>
            <Input.Input
              type="text"
              name="slug"
              placeholder="url"
              defaultValue={profile?.slug ?? undefined}
            />
          </Input.Root>

          <Input.Root>
            <Input.Label>Display Name</Input.Label>
            <Input.Input
              type="text"
              name="display_name"
              placeholder="display name"
              defaultValue={profile?.display_name ?? undefined}
            />
          </Input.Root>
          <button
            className={button({ className: 'justify-self-start' })}
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Submiting' : 'Submit'}
          </button>
          {actionError ? <p>{actionError}</p> : null}
        </Form>
      </div>
    </main>
  );
};

export default Me;
