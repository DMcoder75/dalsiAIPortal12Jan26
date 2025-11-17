/**
 * User Migration Script - Generate API Keys for Existing Users
 * 
 * This script generates API keys for all existing users who don't have one yet.
 * It creates a default API key for each user with "free" tier subscription.
 * 
 * Usage: node migrate-users-to-api-keys.mjs
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
 * Format: sk-dalsi-{random}
 * Returns: { fullKey, prefix, hash }
 */
function generateApiKey() {
  const prefix = 'sk-dalsi-';
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
 * Migrate a single user
 */
async function migrateUser(user) {
  try {
    // Check if user already has an API key
    const { data: existingKey, error: checkError } = await supabase
      .from('api_keys')
      .select('id')
      .eq('user_id', user.id)
      .eq('is_active', true)
      .limit(1);

    if (checkError) {
      console.error(`❌ Error checking existing keys for user ${user.email}:`, checkError);
      return null;
    }

    if (existingKey && existingKey.length > 0) {
      console.log(`⏭️  User ${user.email} already has an API key, skipping...`);
      return { skipped: true, user_id: user.id, email: user.email };
    }

    // Generate new API key
    const { fullKey, prefix, hash } = generateApiKey();

    // Create API key record
    const { data: newKey, error: createError } = await supabase
      .from('api_keys')
      .insert({
        user_id: user.id,
        key_hash: hash,
        key_prefix: prefix,
        name: `Default Key - ${user.email} - ${new Date().toISOString().split('T')[0]}`,
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
      console.error(`❌ Error creating API key for user ${user.email}:`, createError);
      return null;
    }

    // Update user's api_key_id field (if it exists)
    const { error: updateError } = await supabase
      .from('users')
      .update({ api_key_id: newKey[0].id })
      .eq('id', user.id);

    if (updateError) {
      console.warn(`⚠️  Warning: Could not update user's api_key_id for ${user.email}:`, updateError);
      // This is not critical, continue anyway
    }

    console.log(`✅ Created API key for user: ${user.email} (prefix: ${prefix})`);
    
    return {
      created: true,
      user_id: user.id,
      email: user.email,
      api_key_id: newKey[0].id,
      key_prefix: prefix
    };
  } catch (error) {
    console.error(`❌ Unexpected error migrating user ${user.email}:`, error);
    return null;
  }
}

/**
 * Main migration function
 */
async function runMigration() {
  console.log('🚀 Starting user migration to API keys...\n');

  try {
    // Fetch all users
    const { data: users, error: fetchError } = await supabase
      .from('users')
      .select('id, email')
      .order('created_at', { ascending: true });

    if (fetchError) {
      console.error('❌ Error fetching users:', fetchError);
      process.exit(1);
    }

    if (!users || users.length === 0) {
      console.log('⚠️  No users found to migrate');
      process.exit(0);
    }

    console.log(`📊 Found ${users.length} users to process\n`);

    // Migrate each user
    const results = {
      created: 0,
      skipped: 0,
      failed: 0
    };

    for (const user of users) {
      const result = await migrateUser(user);
      
      if (result) {
        if (result.created) results.created++;
        if (result.skipped) results.skipped++;
      } else {
        results.failed++;
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('\n📈 Migration Summary:');
    console.log(`✅ Created: ${results.created}`);
    console.log(`⏭️  Skipped: ${results.skipped}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📊 Total: ${users.length}`);

    if (results.failed === 0) {
      console.log('\n🎉 Migration completed successfully!');
    } else {
      console.log(`\n⚠️  Migration completed with ${results.failed} errors`);
    }

  } catch (error) {
    console.error('❌ Fatal error during migration:', error);
    process.exit(1);
  }
}

// Run the migration
runMigration().then(() => {
  console.log('\n✨ Done!');
  process.exit(0);
}).catch(error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});
