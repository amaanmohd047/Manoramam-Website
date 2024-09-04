import { createClient } from "@supabase/supabase-js";
// import { supabaseKey, supabaseUrl } from "@/app/_lib/constants";

const supabaseUrl = "https://mwcasbkbjbwpywgquajk.supabase.co/";
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
