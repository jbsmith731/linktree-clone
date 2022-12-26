import type { TypedSupabaseClient } from '@routes/__auth';

type NavProps = {
  signOut: TypedSupabaseClient['auth']['signOut'];
  loggedIn: boolean;
};

export const Nav = ({ signOut, loggedIn }: NavProps) => {
  return (
    <header>
      Link Tree Clone
      {loggedIn ? <button onClick={signOut}>Logout</button> : null}
    </header>
  );
};
