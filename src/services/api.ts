const API_KEY = "oXmt0yNpLV4lhIFSYnpmEJ08NYxMf00p";

export const getTrends = async () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((results) => results)
    .catch((e) => console.error(e));
};

export const getGifs = async (data?: { q?: string; limit?: string }) => {
  const params = new URLSearchParams();
  params.append("api_key", API_KEY);

  if (data) {
    if (data?.q) params.append("q", data.q);
    if (data?.limit) params.append("limit", data.limit);
  }

  return fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`)
    .then((res) => res.json())
    .then((results) => results)
    .catch((e) => console.error(e));
};
