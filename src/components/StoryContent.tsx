import React from "react";
import { Story } from "../types";
import { Link } from "react-router-dom";
import { computeDomainName, timeDiffInHours } from "../utils";

interface StoryContentProps {
  story: Story;
}

const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  const { id, url, title, score, by, descendants, time } = story;
  return (
    <>
      <span className="TopStory__content">
        <span className="TopStory__vote">
          <a
            id="up_23761092"
            href="vote?id=23761092&amp;how=up&amp;goto=news%3Fp%3D2"
          >
            <img
              src="https://news.ycombinator.com/grayarrow2x.gif"
              alt="Vote"
              width={10}
              height={10}
            />
          </a>
        </span>
        <span className="TopStory__title">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url ?? "#"}
            className="storylink"
          >
            {title}
          </a>
          {url && (
            <span className="TopStory__url">
              (
              <Link to={`/from?site=${computeDomainName(url)}.org`}>
                <span className="sitestr">{computeDomainName(url)}</span>
              </Link>
              )
            </span>
          )}
        </span>
      </span>

      <div className="TopStory__info">
        <span className="TopStory__info-score">{score} points</span> by{" "}
        <Link to={`/user?id=${by}`}>{by}</Link>{" "}
        <span className="age">
          <Link to={`/item?id=${id}`}>{timeDiffInHours(time)} hours ago</Link>
        </span>{" "}
        <span></span> | <Link to={`/hide?id=${id}`}>hide</Link> |{" "}
        <Link to={`/news/${id}`}>{descendants}&nbsp;comments</Link>{" "}
      </div>
    </>
  );
};

export default StoryContent;
