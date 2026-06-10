import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yibtuifxeedymxurwuqd.supabase.co";
const supabaseKey = "sb_publishable_y0Gz-nQhfdFdDiYHPmvjig_bmY_Byca";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
