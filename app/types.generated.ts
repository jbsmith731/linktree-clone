export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      link: {
        Row: {
          id: number;
          created_at: string | null;
          user: string | null;
          display_text: string | null;
          url: string | null;
          profile: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          user?: string | null;
          display_text?: string | null;
          url?: string | null;
          profile?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          user?: string | null;
          display_text?: string | null;
          url?: string | null;
          profile?: string | null;
        };
      };
      profile: {
        Row: {
          id: string;
          created_at: string | null;
          display_name: string | null;
          user: string | null;
          slug: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string | null;
          display_name?: string | null;
          user?: string | null;
          slug?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string | null;
          display_name?: string | null;
          user?: string | null;
          slug?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
