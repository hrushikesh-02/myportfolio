import React from "react";

const Tile = (props) => {
  return (
    <div className=" bg-[color:var(--clr3)]  rounded-xl p-2 flex flex-col items-center shadow-lg">
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default Tile;
