import { useState, useEffect } from "react";
import { Story } from "../types";
import Axios from "axios";

const useFetchStories = (storyIds: number[], storiesPerPage: number) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [stories, setStories] = useState<null | Story[]>(null);

  useEffect(() => {
    const fetchTopStories = async () => {
      const chunk = storyIds?.slice(
        (pageNumber - 1) * storiesPerPage,
        pageNumber * storiesPerPage
      );
      if (chunk) {
        setIsFetching(true);
        const data = await Promise.all<Story>(
          chunk?.map(async c => {
            const { data } = await Axios.get<Story>(
              `https://hacker-news.firebaseio.com/v0/item/${c}.json`
            );
            return data;
          })
        );
        setIsFetching(false);
        setStories(data.length === 0 ? null : data);
      }
    };

    fetchTopStories();
  }, [pageNumber, storiesPerPage, storyIds]);

  return {
    stories,
    currentPageNumber: pageNumber,
    setPageNumber,
    isFetching,
    setStories
  };
};

export default useFetchStories;
