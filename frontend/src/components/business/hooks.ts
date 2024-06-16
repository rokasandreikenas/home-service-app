import { useQuery } from "@tanstack/react-query";
import { fetchBusinesses } from "./api";

export const BUSINESS_KEY = "BUSINESS";

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};
