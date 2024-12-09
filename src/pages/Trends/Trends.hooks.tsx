import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { getGifs, getTrends } from "../../services/api";
import { debounce } from "../../utils";

export const useTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, startTransition] = useTransition();

  const initialLoad = () => {
    startTransition(() => {
      getTrends()
        .then((res) => {
          setTrends(res);
        })
        .catch((e) => console.error(e));
    });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value === "") {
      initialLoad();
      return;
    }
    debounce(() => {
      searchGifs(e.target.value);
    }, 800)(e);
  };

  const searchGifs = (q: string) => {
    startTransition(() => {
      getGifs({ q })
        .then((res) => setTrends(res))
        .catch((e) => console.error(e));
    });
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return { trends, loading, handleSearch };
};
