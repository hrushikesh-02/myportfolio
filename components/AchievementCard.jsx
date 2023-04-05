import Image from "next/image";
import React from "react";
const AchievementCard = (props) => {
  return (
    <div className="w-[100%]  mt-7 flex flex-col md:flex-row rounded-md ">
      <div className="rounded-[10px_10px_0px_0px] md:rounded-[10px_0px_0px_10px] overflow-hidden relative">
        <Image layout="fill" className="" src="/desktopimg.jpeg" />
      </div>
      <div className="rounded-[0px_0px_10px_10px] md:rounded-[0px_10px_10px_0px] p-3 bg-white ">
        <h1 className="text-xl">{props.title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, voluptas. Asperiores autem excepturi consequatur
          assumenda, qui odit nihil libero doloremque explicabo quidem,
          accusamus repudiandae vero, quos saepe vitae fugiat sed?
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
