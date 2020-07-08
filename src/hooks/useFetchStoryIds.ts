import { useState, useEffect } from "react";
import Axios from "axios";

const useFetchStoryIds = (type: string) => {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  useEffect(() => {
    const fetchStoryIds = async (): Promise<void> => {
      console.log("Im getting created");
      try {
        const { data } = await Axios.get<number[]>(
          `https://hacker-news.firebaseio.com/v0/${type}.json`
        );
        setStoryIds(data);
      } catch (err) {
        setStoryIds([]);
      }
    };
    fetchStoryIds();
  }, [type]);

  return { storyIds, setStoryIds };
};

export default useFetchStoryIds;
