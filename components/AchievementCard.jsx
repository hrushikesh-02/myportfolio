import Image from "next/image";
import React from "react";
const AchievementCard = (props) => {
  return (
    <div className="w-[100%]  mt-7 flex flex-col md:flex-row pop rounded-xl">
      <div className="rounded-[10px_10px_0px_0px] md:rounded-[10px_0px_0px_10px] overflow-hidden relative bg-white flex justify-center items-center p-5">
        {props.img}
      </div>
      <div className="rounded-[0px_0px_10px_10px] md:rounded-[0px_10px_10px_0px] p-5 pt-0 md:pt-5 md:pl-0 bg-white md:w-[100%]">
        <h1 className="text-xl">{props.title}</h1>
        <p>{props.content}</p>
        <button
          onClick={() => {
            window.open(props.link);
          }}
          className="mt-3 inline-block rounded bg-[color:var(--btn)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#f5efd9] transition duration-150 ease-in-out hover:bg-[color:var(--btn)] hover:shadow-[0_8px_9px_-4px_rgba(159,113,102,0.3),0_4px_18px_0_rgba(159,113,102,0.2)]"
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default AchievementCard;
