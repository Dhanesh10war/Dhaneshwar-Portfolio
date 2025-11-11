-- Create analytics tables for tracking visitor interactions

-- Page views tracking
CREATE TABLE public.page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Project clicks tracking
CREATE TABLE public.project_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name TEXT NOT NULL,
  click_type TEXT, -- 'demo' or 'github'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Resume downloads tracking
CREATE TABLE public.resume_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_agent TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Contact form submissions tracking
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Visitor counter (realtime)
CREATE TABLE public.visitor_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_visits INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert initial visitor stats
INSERT INTO public.visitor_stats (total_visits, unique_visitors)
VALUES (0, 0);

-- Enable Row Level Security
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (analytics data)
CREATE POLICY "Anyone can view page views" ON public.page_views
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert page views" ON public.page_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view project clicks" ON public.project_clicks
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert project clicks" ON public.project_clicks
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view resume downloads" ON public.resume_downloads
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert resume downloads" ON public.resume_downloads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view contact submissions" ON public.contact_submissions
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert contact submissions" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view visitor stats" ON public.visitor_stats
  FOR SELECT USING (true);

CREATE POLICY "Anyone can update visitor stats" ON public.visitor_stats
  FOR UPDATE USING (true);

-- Enable realtime for visitor stats
ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_stats;

-- Create indexes for better query performance
CREATE INDEX idx_page_views_created_at ON public.page_views(created_at DESC);
CREATE INDEX idx_project_clicks_created_at ON public.project_clicks(created_at DESC);
CREATE INDEX idx_resume_downloads_created_at ON public.resume_downloads(created_at DESC);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- Function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.visitor_stats
  SET total_visits = total_visits + 1,
      last_updated = now()
  WHERE id = (SELECT id FROM public.visitor_stats LIMIT 1);
END;
$$;