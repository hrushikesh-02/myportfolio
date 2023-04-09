import React from "react";

const Tile = (props) => {
  return (
    <div
      className="   rounded-xl p-2 flex flex-col items-center border pop bg-white"
      onClick={() => {
        window.open(props.link);
      }}
    >
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default Tile;
