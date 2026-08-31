import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://uyrgncigebtvlaqqoibg.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_iUk1sXylwkDadug7R9Gzeg_cqAS17BL';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
