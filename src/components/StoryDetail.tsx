import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Story, Comment } from "../types";
import Axios from "axios";
import StoryContent from "./StoryContent";
import Spinner from "./Spinner";
import { timeDiffInHours } from "../utils";

const StoryDetail: React.FC<RouteComponentProps<{ newsId: string }>> = ({
  match: {
    params: { newsId }
  }
}) => {
  const [story, setStory] = useState<null | Story>(null);
  const [comments, setComments] = useState<null | Comment[]>(null);

  useEffect(() => {
    async function fetchComments(storyId: number) {
      const {
        data: { kids, ...rest }
      } = await Axios.get<Story>(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      setStory({ ...rest, kids });
      const comments = await Promise.all(
        kids.map(async kid => {
          const { data } = await Axios.get<Comment>(
            `https://hacker-news.firebaseio.com/v0/item/${kid}.json`
          );
          return data;
        })
      );
      console.log(comments);
      setComments(comments);
    }

    fetchComments(parseInt(newsId));
  }, [newsId]);

  return story && comments ? (
    <div className="StoryDetail">
      <StoryContent story={story} />
      <ul>
        {comments.map(c => (
          <li style={{ marginBottom: "2rem" }} key={c.id}>
            <p>
              {c.by} - {timeDiffInHours(c.time)} hours ago
            </p>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <Spinner />
  );
};

export default StoryDetail;
