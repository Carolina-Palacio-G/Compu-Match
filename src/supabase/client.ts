import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

const supabaseUrl = 'https://kukuiahectnyinmfhtmc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1a3VpYWhlY3RueWlubWZodG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyODU3NzcsImV4cCI6MjA0NDg2MTc3N30.YBsFnve5t8TFMzz3b5R1IF4Y-ftEYmXuWgB_HuzC6aI'; 

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);