-- Create API key for guest user (dalsiainoreply@gmail.com)
-- This allows the guest user to make API calls to the new API platform

-- First, get the guest user ID
WITH guest_user AS (
  SELECT id FROM public.users WHERE email = 'dalsiainoreply@gmail.com'
)

-- Insert API key for guest user
INSERT INTO public.api_keys (
  user_id,
  key_prefix,
  key_hash,
  name,
  created_at,
  updated_at,
  is_active,
  rate_limit_per_minute,
  rate_limit_per_hour,
  rate_limit_per_day
)
SELECT 
  gu.id,
  'guest_' || substring(encode(digest('guest_' || gu.id || '_' || NOW()::text, 'sha256'), 'hex'), 1, 8),
  encode(digest('guest_' || gu.id || '_' || NOW()::text, 'sha256'), 'hex'),
  'Guest User API Key',
  NOW(),
  NOW(),
  true,
  60,    -- 60 requests per minute for free tier
  1000,  -- 1000 requests per hour for free tier
  10000  -- 10000 requests per day for free tier
FROM guest_user gu
ON CONFLICT DO NOTHING;

-- Verify the API key was created
SELECT 
  u.id,
  u.email,
  u.first_name,
  ak.id as api_key_id,
  ak.key_prefix,
  ak.name,
  ak.is_active,
  ak.rate_limit_per_minute,
  ak.rate_limit_per_hour,
  ak.rate_limit_per_day
FROM public.users u
LEFT JOIN public.api_keys ak ON u.id = ak.user_id
WHERE u.email = 'dalsiainoreply@gmail.com';
