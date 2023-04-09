import React from "react";
const Card = (props) => {
  return (
    <div className="flex justify-center">
      <div className="block w-[100%] rounded-lg  overflow-hidden pop">
        <div className="p-6">
          <h5 className="mb-2 text-xl leading-tight text-neutral-900  font-bold">
            {props.title}
          </h5>
          <p className="mb-4 text-base text-neutral-500 ">{props.content}</p>
          <button
            onClick={() => {
              window.open(props.link);
            }}
            className="inline-block rounded bg-[color:var(--btn)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#f5efd9] transition duration-150 ease-in-out hover:bg-[color:var(--btn)] hover:shadow-[0_8px_9px_-4px_rgba(159,113,102,0.3),0_4px_18px_0_rgba(159,113,102,0.2)]"
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
