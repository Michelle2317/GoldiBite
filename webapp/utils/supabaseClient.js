import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xegvvkvhhjdvehdtildb.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZ3Z2a3ZoaGpkdmVoZHRpbGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NzYxMTgsImV4cCI6MjA0ODQ1MjExOH0.b05F41_GMD_d3t-4pD6iVEfP8_ty45zlpCnPlrN47AI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
