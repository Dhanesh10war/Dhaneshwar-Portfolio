import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Fetch initial visitor count
    const fetchVisitorCount = async () => {
      try {
        const { data, error } = await supabase
          .from("visitor_stats")
          .select("total_visits")
          .single();

        if (error) throw error;
        setVisitorCount(data?.total_visits || 0);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("visitor-stats-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "visitor_stats",
        },
        (payload: any) => {
          setVisitorCount(payload.new.total_visits);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return visitorCount;
};
