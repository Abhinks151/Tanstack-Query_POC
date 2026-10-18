import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = ["users"]
const URL = "http://localhost:3000/";

export function getUsers() {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(URL);

      if (!res.ok) throw new Error("there is an error");

      return res.json();
    },
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 10,
  });
}


export function createUsers() {
  const queryClient = useQueryClient();
  return useMutation({

    mutationFn: async (name: string) => {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("there is an error");

      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}