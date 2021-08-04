import React from "react";
import { Feed } from "../definition";
import Collection from "./styleguide/collection.component";
import feed from "../feed/sample.json";

//@ts-ignore
const data: Feed = feed;

const SeriesPage: React.FC = () => {
  return (
    <div className="home-page">
      <Collection
        data={data.entries.filter((dt) => dt.programType === "series")}
      />
    </div>
  );
};

export default SeriesPage;
