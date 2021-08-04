import React from "react";
import { FeedItem } from "../../definition";
import Poster from "./poster.component";

interface CollectionProps {
  data: FeedItem[];
}

const Collection: React.FC<CollectionProps> = ({ data }) => {
  return (
    <div
      className={`collection ${
        data.length < 5 ? "collection--flex-start" : ""
      }`}
    >
      {data.map((entry, i) => (
        <Poster key={i} data={entry} />
      ))}
    </div>
  );
};

export default Collection;
