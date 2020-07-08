import React from "react";
import StoryContent from "./StoryContent";
import "../styles/TopStory.scss";
import { Story } from "../types";

interface TopStoryProps {
  storyNumber: number;
  story: Story;
}

const TopStory: React.FC<TopStoryProps> = ({ storyNumber, story }) => {
  return (
    <div className="TopStory">
      <span className="TopStory__serial">{storyNumber}.</span>
      <StoryContent story={story} />
    </div>
  );
};

export default TopStory;
