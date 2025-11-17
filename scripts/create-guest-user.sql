-- Create guest user for tracking anonymous API usage
-- This user will be used to log all guest/anonymous API calls
INSERT INTO public.users (
  email,
  first_name,
  last_name,
  created_at,
  updated_at,
  subscription_tier,
  role,
  status
) VALUES (
  'dalsiainoreply@gmail.com',
  'Guest',
  'User',
  NOW(),
  NOW(),
  'free',
  'user',
  'active'
) ON CONFLICT (email) DO NOTHING;

-- Get the guest user ID for reference
SELECT id, email, first_name, last_name, subscription_tier FROM public.users WHERE email = 'dalsiainoreply@gmail.com';
