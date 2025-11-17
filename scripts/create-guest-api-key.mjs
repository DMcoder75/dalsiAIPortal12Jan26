/**
 * Guest User API Key Generation Script
 * 
 * This script generates an API key for the guest user (dalsiainoreply@gmail.com)
 * to enable guest API call logging and tracking.
 * 
 * Usage: node create-guest-api-key.mjs
 */
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Generate a new API key
 * Format: sk-guest-{random}
 * Returns: { fullKey, prefix, hash }
 */
function generateApiKey() {
  const prefix = 'sk-guest-';
  const randomPart = crypto.randomBytes(32).toString('hex');
  const fullKey = prefix + randomPart;
  const hash = crypto.createHash('sha256').update(fullKey).digest('hex');
  
  return {
    fullKey,
    prefix: fullKey.substring(0, 16), // First 16 chars for display
    hash
  };
}

/**
 * Create API key for guest user
 */
async function createGuestApiKey() {
  try {
    console.log('🔍 Fetching guest user...');
    
    // Get guest user
    const { data: guestUser, error: fetchError } = await supabase
      .from('users')
      .select('id, email, first_name, last_name')
      .eq('email', 'dalsiainoreply@gmail.com')
      .maybeSingle();
    
    if (fetchError) {
      console.error('❌ Error fetching guest user:', fetchError);
      process.exit(1);
    }
    
    if (!guestUser) {
      console.error('❌ Guest user not found. Please create it first using create-guest-user.sql');
      process.exit(1);
    }
    
    console.log('✅ Guest user found:', guestUser.email);
    
    // Check if guest user already has an API key
    console.log('🔍 Checking for existing API key...');
    const { data: existingKey, error: checkError } = await supabase
      .from('api_keys')
      .select('id, key_prefix')
      .eq('user_id', guestUser.id)
      .eq('is_active', true)
      .limit(1);
    
    if (checkError) {
      console.error('❌ Error checking existing keys:', checkError);
      process.exit(1);
    }
    
    if (existingKey && existingKey.length > 0) {
      console.log('⏭️  Guest user already has an active API key:', existingKey[0].key_prefix);
      console.log('✅ No action needed');
      process.exit(0);
    }
    
    // Generate new API key
    console.log('🔑 Generating new API key...');
    const { fullKey, prefix, hash } = generateApiKey();
    
    console.log('📝 Creating API key record...');
    
    // Create API key record with all required fields
    const { data: newKey, error: createError } = await supabase
      .from('api_keys')
      .insert({
        user_id: guestUser.id,
        key_hash: hash,
        key_prefix: prefix,
        name: `Guest User API Key - ${new Date().toISOString().split('T')[0]}`,
        is_active: true,
        scopes: ['ai.chat', 'ai.code', 'ai.image'],
        subscription_tier: 'free',
        rate_limit_per_minute: 60,
        rate_limit_per_hour: 1000,
        rate_limit_per_day: 10000,
        total_requests: 0,
        total_tokens_used: 0,
        total_cost_usd: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select();
    
    if (createError) {
      console.error('❌ Error creating API key:', createError);
      process.exit(1);
    }
    
    console.log('✅ API key created successfully!');
    console.log('\n📊 Guest User API Key Details:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('User Email:', guestUser.email);
    console.log('User ID:', guestUser.id);
    console.log('API Key ID:', newKey[0].id);
    console.log('Key Prefix:', prefix);
    console.log('Full Key (save this securely):', fullKey);
    console.log('Rate Limits:');
    console.log('  - Per Minute: 60');
    console.log('  - Per Hour: 1000');
    console.log('  - Per Day: 10000');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Update user's api_key_id field
    console.log('🔄 Updating user api_key_id...');
    const { error: updateError } = await supabase
      .from('users')
      .update({ api_key_id: newKey[0].id })
      .eq('id', guestUser.id);
    
    if (updateError) {
      console.error('⚠️  Warning: Could not update user api_key_id:', updateError);
    } else {
      console.log('✅ User api_key_id updated successfully');
    }
    
    console.log('\n✅ Guest user API key setup complete!');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

// Run the script
createGuestApiKey();
