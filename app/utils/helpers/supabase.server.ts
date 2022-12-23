import { createServerClient as _createServerClient } from '@supabase/auth-helpers-remix';
import type { Database } from '../../types.generated';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../constants/supabase';

export const createServerClient = ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) =>
  _createServerClient<Database>(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    request,
    response,
  });
