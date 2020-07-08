import React from "react";

const Footer = () => {
  return (
    <div>
      <span>
        <a href="https://news.ycombinator.com/newsguidelines.html">
          Guidelines
        </a>
        | <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>|{" "}
        <a href="mailto:hn@ycombinator.com">Support</a>|{" "}
        <a href="https://github.com/HackerNews/API">API</a>|{" "}
        <a href="https://news.ycombinator.com/security.html">Security</a>|{" "}
        <a href="lists">Lists</a>|{" "}
        <a href="https://news.ycombinator.com/bookmarklet.html" rel="nofollow">
          Bookmarklet
        </a>
        | <a href="https://www.ycombinator.com/legal/">Legal</a>|{" "}
        <a href="https://www.ycombinator.com/apply/">Apply to YC</a>|{" "}
        <a href="mailto:hn@ycombinator.com">Contact</a>
      </span>
      <form>
        Search:
        <input type="text" name="q" />
      </form>
    </div>
  );
};

export default Footer;
