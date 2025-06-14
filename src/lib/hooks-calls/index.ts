import { fetchAPI } from "lib/api-calls";
import useSWR from "swr";

export function useSearchProducts(
  query: string,
  limit: number,
  offset: number
) {
  const { data, error } = useSWR(
    `/api/search?q=${query}&limit=${limit}&offset=${offset}`,
    fetchAPI
  );
  return { data, error };
}
