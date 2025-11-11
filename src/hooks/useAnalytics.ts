import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const usePageView = () => {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        const { error } = await supabase.from("page_views").insert({
          page_path: window.location.pathname,
          user_agent: navigator.userAgent,
          referrer: document.referrer,
        });

        if (error) throw error;

        // Increment visitor count
        await supabase.rpc("increment_visitor_count");
      } catch (error) {
        console.error("Error tracking page view:", error);
      }
    };

    trackPageView();
  }, []);
};

export const trackProjectClick = async (projectName: string, clickType: "demo" | "github") => {
  try {
    const { error } = await supabase.from("project_clicks").insert({
      project_name: projectName,
      click_type: clickType,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error tracking project click:", error);
  }
};

export const trackResumeDownload = async () => {
  try {
    const { error } = await supabase.from("resume_downloads").insert({
      user_agent: navigator.userAgent,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Error tracking resume download:", error);
  }
};

export const submitContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const { error } = await supabase.from("contact_submissions").insert(data);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error };
  }
};
