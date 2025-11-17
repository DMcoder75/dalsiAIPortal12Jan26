-- ============================================================================
-- RLS Policy Updates for API Keys Table
-- ============================================================================
-- This script updates the Row-Level Security (RLS) policies on the api_keys 
-- table to allow the anon key holder to INSERT API keys during migration,
-- but prevents any updates/deletes via app calls (backend only).
--
-- Run this in your Supabase SQL Editor with admin/service_role privileges
-- ============================================================================

-- Step 1: Enable RLS on api_keys table (if not already enabled)
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;

-- Step 2: Drop existing policies (if they exist)
DROP POLICY IF EXISTS "Allow anon to insert API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Allow anon to read API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Prevent app updates to API keys" ON public.api_keys;
DROP POLICY IF EXISTS "Prevent app deletes from API keys" ON public.api_keys;

-- Step 3: Create new policies

-- Policy 1: Allow anon key to INSERT API keys (for migration and initial key creation)
CREATE POLICY "Allow anon to insert API keys"
ON public.api_keys
FOR INSERT
WITH CHECK (true);

-- Policy 2: Allow anon key to SELECT API keys (read-only for verification)
CREATE POLICY "Allow anon to read API keys"
ON public.api_keys
FOR SELECT
USING (true);

-- Policy 3: DENY UPDATE operations from app (backend only)
-- This prevents any UPDATE calls via the app
CREATE POLICY "Prevent app updates to API keys"
ON public.api_keys
FOR UPDATE
WITH CHECK (false);

-- Policy 4: DENY DELETE operations from app (backend only)
-- This prevents any DELETE calls via the app
CREATE POLICY "Prevent app deletes from API keys"
ON public.api_keys
FOR DELETE
USING (false);

-- Step 4: Grant necessary permissions
GRANT SELECT, INSERT ON public.api_keys TO anon;
GRANT SELECT ON public.api_keys TO authenticated;

-- ============================================================================
-- Verification Queries
-- ============================================================================
-- Run these to verify the RLS policies are correctly set up:

-- Check if RLS is enabled on api_keys
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'api_keys';

-- List all policies on api_keys table
-- SELECT schemaname, tablename, policyname, permissive, roles, qual, with_check 
-- FROM pg_policies WHERE tablename = 'api_keys' ORDER BY policyname;

-- ============================================================================
-- SECURITY NOTES:
-- ============================================================================
-- 1. Anon key can INSERT and SELECT (for migration and reading keys)
-- 2. Anon key CANNOT UPDATE or DELETE (backend only)
-- 3. Authenticated users can only SELECT (read-only)
-- 4. Any modifications to API keys must be done via backend/service role
-- 5. This ensures:
--    - Migration script can create initial API keys
--    - App cannot modify existing API keys
--    - All API key updates/deletes must go through secure backend
-- ============================================================================
