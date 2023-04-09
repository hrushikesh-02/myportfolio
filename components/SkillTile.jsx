import React from "react";

const SkillTile = (props) => {
  return (
    <div className="pop h-full rounded-xl p-2 flex flex-col items-center justify-center border bg-white">
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default SkillTile;
