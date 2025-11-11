-- Fix search_path security warning by recreating the function with proper search_path
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.visitor_stats
  SET total_visits = total_visits + 1,
      last_updated = now()
  WHERE id = (SELECT id FROM public.visitor_stats LIMIT 1);
END;
$$;