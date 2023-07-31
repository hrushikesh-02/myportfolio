import React from "react";
const Card = (props) => {
  return (
    <div className="flex justify-center">
      <div className="block w-[100%] rounded-lg  overflow-hidden pop bg-white">
        <div className="p-6">
          <h5 className="mb-2 text-xl leading-tight text-neutral-900  font-bold">
            {props.title}
          </h5>
          <p className="mb-4 text-base text-neutral-500 ">{props.content}</p>
          <button
            onClick={() => {
              window.open(props.link);
            }}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
