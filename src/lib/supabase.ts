
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urbrtpngxfpaxagctooi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyYnJ0cG5neGZwYXhhZ2N0b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODY4MjQsImV4cCI6MjA3Nzg2MjgyNH0.mOnaeazcu66yYYrxvntX4iV1RiLvSGYDZQCai8Yl07I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          latitude: number | null;
          longitude: number | null;
          ghost_mode: boolean;
          last_seen: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      messages: {
        Row: {
          id: string;
          user_id: string;
          room_id: string;
          content: string;
          message_type: 'text' | 'image' | 'video';
          media_url: string | null;
          reply_to: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['messages']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['messages']['Insert']>;
      };
    };
  };
};