import React from "react";

interface iconWithLink {
  url: string;
  fontAwesomeIcon: JSX.Element;
}

const IconWithLink = ({ url, fontAwesomeIcon }: iconWithLink) => {
  return <a href={url}>{fontAwesomeIcon}</a>;
};

export default IconWithLink;
