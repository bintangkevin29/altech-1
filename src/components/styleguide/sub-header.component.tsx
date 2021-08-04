import React from "react";

const SubHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={`sub-header ${className || ""}`}>
      <div className="sub-header__inner">{children}</div>
    </div>
  );
};

export default SubHeader;
