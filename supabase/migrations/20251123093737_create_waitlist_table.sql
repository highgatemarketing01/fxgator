/*
  # Create waitlist table for FX Gator landing page

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique, not null) - User's email address
      - `name` (text, not null) - User's full name
      - `created_at` (timestamptz) - Timestamp when user joined the waitlist
      
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new waitlist entries (public access for signup)
    - Add policy for authenticated admins to view waitlist entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to join the waitlist
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view waitlist
CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);