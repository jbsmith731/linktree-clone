import { textButton } from '@primitives/button';
import type { TypedSupabaseClient } from '@routes/__auth';

type NavProps = {
  signOut: TypedSupabaseClient['auth']['signOut'];
  loggedIn: boolean;
};

export const Nav = ({ signOut, loggedIn }: NavProps) => {
  return (
    <header className="flex justify-between">
      🔗🌳 Clone
      {loggedIn ? (
        <button className={textButton()} onClick={signOut}>
          Logout
        </button>
      ) : null}
    </header>
  );
};
