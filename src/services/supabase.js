import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wmnqsccvilbwymnclngh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbnFzY2N2aWxid3ltbmNsbmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1OTQ5MjksImV4cCI6MjA3NjE3MDkyOX0.8tFY1zE4jrcg7cPN7ypk-EMVUx9ZBs2ZLJIG4W5EsSU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
