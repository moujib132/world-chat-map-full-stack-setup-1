
# Buildify Planning Document

## Requirements
- Implement Supabase Authentication with Google OAuth and Guest (anonymous) login
- Create profiles table to store user data (id, name, avatar, coordinates)
- Redirect to Map page after successful login
- Save user profile data to Supabase after authentication

## Design
- AuthPage with two login options: Google and Guest
- Use Supabase Auth for Google OAuth provider
- Generate random username for guest users
- Store user profiles in `profiles` table with RLS policies

## Tasks
1. **Create profiles table in Supabase** [Status: In Progress]
   - Create table schema with id, name, avatar_url, latitude, longitude
   - Set up RLS policies for user data access
   - Cost: ~50 LOC × 10 = 500 tokens

2. **Implement Google OAuth login** [Status: Pending]
   - Configure Google provider in AuthPage
   - Handle OAuth callback and errors
   - Cost: ~80 LOC × 10 = 800 tokens

3. **Implement Guest login** [Status: Pending]
   - Create anonymous sign-in with random username
   - Generate avatar placeholder
   - Cost: ~60 LOC × 10 = 600 tokens

4. **Create profile management logic** [Status: Pending]
   - Save/update user profile after login
   - Fetch user coordinates (placeholder or geolocation)
   - Cost: ~70 LOC × 10 = 700 tokens

5. **Update AuthContext and routing** [Status: Pending]
   - Add profile creation to auth flow
   - Implement redirect to Map page after login
   - Cost: ~40 LOC × 10 = 400 tokens

## Discussions
- Using Supabase Auth for both Google OAuth and anonymous authentication
- Profiles table separate from auth.users for custom user data
- Random username generation for guest users using adjective + noun pattern