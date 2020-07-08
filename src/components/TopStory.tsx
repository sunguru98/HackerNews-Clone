import React, { useMemo } from "react";
import moment from "moment";
import { Story } from "../types";
import "../styles/TopStory.scss";
import { Link } from "react-router-dom";

interface TopStoryProps {
  storyNumber: number;
  story: Story;
}

const computeDomainName = (url: string) =>
  new URL(url).hostname.replace("www.", "");

const TopStory: React.FC<TopStoryProps> = ({
  storyNumber,
  story: { id, url, title, time, score, by, descendants }
}) => {
  const timeDiff = useMemo(
    () => moment(new Date().getTime()).diff(moment(time * 1000), "hours"),
    [time]
  );

  return (
    <div className="TopStory">
      <span className="TopStory__content">
        <span>{storyNumber}.</span>
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
          <Link to={`/item?id=${id}`}>{timeDiff} hours ago</Link>
        </span>{" "}
        <span></span> | <Link to={`/hide?id=${id}`}>hide</Link> |{" "}
        <Link to={`item?id=${id}`}>{descendants}&nbsp;comments</Link>{" "}
      </div>
    </div>
  );
};

export default TopStory;
