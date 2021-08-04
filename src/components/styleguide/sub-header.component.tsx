import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface PathData {
  path: string;
  title: string;
}

const SubHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const [title, setTitle] = useState<string>();
  const pathData: PathData[] = [
    {
      path: "/",
      title: "Popular Titles",
    },
    {
      path: "/series",
      title: "Popular Series",
    },
    {
      path: "/movies",
      title: "Popular Movies",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setTitle(pathData.find((p) => p.path === path)?.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={`sub-header ${className || ""}`}>
      <div className="sub-header__inner">{title}</div>
    </div>
  );
};

export default SubHeader;
