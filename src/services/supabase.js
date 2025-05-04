import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sgxvojrarahgbewstjwe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneHZvanJhcmFoZ2Jld3N0andlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2ODQwNDYsImV4cCI6MjA1NzI2MDA0Nn0.gkXUen7drUpdUlhbALUkXYLbMZcAIcZh0SA56QdYwus";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
