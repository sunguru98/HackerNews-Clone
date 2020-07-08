import React from "react";
import { RouteComponentProps } from "react-router-dom";
import TopStory from "./TopStory";
import Spinner from "./Spinner";
import useFetchStoryIds from "../hooks/useFetchStoryIds";
import useFetchStories from "../hooks/useFetchStories";

import "../styles/TopStories.scss";

interface TopStoriesProps extends RouteComponentProps {
  storiesPerPage?: number;
}

const TopStories: React.FC<TopStoriesProps> = ({ storiesPerPage = 30 }) => {
  const { storyIds } = useFetchStoryIds("topstories");
  const {
    stories,
    isFetching,
    currentPageNumber,
    setPageNumber,
    setStories
  } = useFetchStories(storyIds, storiesPerPage);

  const paginateData = (type: string) => {
    setStories(null);
    setPageNumber(
      type === "inc" ? currentPageNumber + 1 : currentPageNumber - 1
    );
  };

  const getStorySerialNumber = (storyIndex: number) =>
    storiesPerPage * (currentPageNumber - 1) + storyIndex + 1;

  return !stories || isFetching ? (
    <Spinner />
  ) : (
    <div className="TopStories">
      {stories.map((story, index) => (
        <TopStory
          key={story.id}
          story={story}
          storyNumber={getStorySerialNumber(index)}
        />
      ))}

      <div className="TopStories__buttons">
        {currentPageNumber < Math.ceil(storyIds.length / storiesPerPage) && (
          <button disabled={isFetching} onClick={() => paginateData("inc")}>
            Next Page
          </button>
        )}
        {currentPageNumber > 1 && (
          <button disabled={isFetching} onClick={() => paginateData("dec")}>
            Prev Page
          </button>
        )}
      </div>
    </div>
  );
};

export default TopStories;
