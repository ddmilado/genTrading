import React from "react";
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(
  "https://thyfxprwjdssceekxlfn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeWZ4cHJ3amRzc2NlZWt4bGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTc4NTUsImV4cCI6MTk5ODg3Mzg1NX0.gQfPvXe-wXs2DMW_U2Cj205JPurXXnRwjnp1kckk-Yg", {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});