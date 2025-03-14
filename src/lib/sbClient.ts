import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_PUBLIC_URL!, process.env.NEXT_PUBLIC_ANON_KEY!)
