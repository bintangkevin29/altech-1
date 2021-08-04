import React from "react";
import { Feed } from "../definition";
import Collection from "./styleguide/collection.component";
import feed from "../feed/sample.json";

//@ts-ignore
const data: Feed = feed;

const MoviesPage: React.FC = () => {
  return (
    <div className="home-page">
      <Collection
        data={data.entries.filter((dt) => dt.programType === "movie")}
      />
    </div>
  );
};

export default MoviesPage;
