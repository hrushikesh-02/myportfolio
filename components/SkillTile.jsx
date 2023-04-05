import React from "react";

const SkillTile = (props) => {
  return (
    <div className=" bg-[color:var(--clr3)]  h-full rounded-xl p-2 flex flex-col items-center justify-center shadow-lg">
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default SkillTile;
