import React from "react";
import { Route } from "react-router";
import HomePage from "../home.page";
import MoviesPage from "../movies.page";
import SeriesPage from "../series.page";

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content__inner">
        <Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/series" exact>
            <SeriesPage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
        </Route>
      </div>
    </div>
  );
};

export default Content;
