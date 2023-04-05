import React from "react";

const Timeline = (props) => {
  return (
    <div>
      <li className="mb-3 ml-4">
        <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none ">
          {props.date}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {props.title}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
      </li>
    </div>
  );
};

export default Timeline;
