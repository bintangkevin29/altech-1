import React from "react";
import { Feed } from "../definition";
import Collection from "./styleguide/collection.component";

const data: Feed = {
  total: 2,
  entries: [
    {
      title: "Popular Series",
      alternateTitle: "SERIES",
      programType: "series",
      path: "/series",
    },
    {
      title: "Popular Movies",
      alternateTitle: "MOVIES",
      programType: "movie",
      path: "/movies",
    },
  ],
};

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Collection data={data.entries} />
    </div>
  );
};

export default HomePage;
