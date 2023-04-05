import React from "react";
const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 overflow-hidden">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
          <button className="inline-block rounded bg-[color:var(--btn)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#f5efd9] transition duration-150 ease-in-out hover:bg-[color:var(--btn)] hover:shadow-[0_8px_9px_-4px_rgba(159,113,102,0.3),0_4px_18px_0_rgba(159,113,102,0.2)]">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
