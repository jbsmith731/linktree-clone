import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node'; // change this import to whatever runtime you are using
import { useLoaderData } from '@remix-run/react';
import { createServerClient } from '@supabase/auth-helpers-remix';
import type { Database } from '@types.generated';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@utils/constants/supabase';

export const loader = async ({ request, params }: LoaderArgs) => {
  // an empty response is required for the auth helpers
  // to set cookies to manage auth
  const response = new Response();
  const { id } = params;

  const supabaseClient = createServerClient<Database>(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      request,
      response,
    }
  );

  const { data } = await supabaseClient
    .from('profile')
    .select(`*, link(id, display_text, url)`)
    .eq('slug', id)
    .single();

  if (!data) throw new Response('', { status: 404 });

  // in order for the set-cookie header to be set,
  // headers must be returned as part of the loader response
  return json(
    { data },
    {
      headers: response.headers,
    }
  );
};

const Profile = () => {
  const { data } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{data.display_name}</h1>

      {Array.isArray(data.link) ? (
        <ul>
          {data.link.map((link) => {
            return (
              <li key={link.id}>
                {link.url ? (
                  <a href={link.url}>{link.display_text}</a>
                ) : (
                  link.display_text
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </main>
  );
};

export default Profile;
