
// Supabase Project URL
const SUPABASE_URL = "https://wzptnvidvpkvmatbeajj.supabase.co";

// Supabase Publishable Key
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_j1vWyNY4mVynvXH8UxAmNw_7enVpMhr";

// Create Supabase client
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connected successfully!");


async function testSupabaseConnection() {

    const { data, error } = await supabaseClient
        .from("songs")
        .select("*");

    if (error) {
        console.error("Database test failed:", error);
        return;
    }

    console.log("Database read successful:", data);
}

testSupabaseConnection();