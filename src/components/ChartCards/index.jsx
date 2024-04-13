import React from "react";

function ChartCards({ title, total, percentage, icon }) {
  return (
    <>
      <div className="flex flex-col px-3 pt-3 pb-6 bg-white rounded-2xl  max-h-[108px] min-w-[180px] leading-[150%] max-w-[400px] shadow-[1px_3px_9px_rgba(100,52,248,0.15)]">
        <div className="flex gap-3.5 text-xs text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08074da68c84a49fab0013ced3078ba88d66faa0618ca6987c5939925e2252de?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
            className="shrink-0 aspect-square w-[27px]"
          />
          <div>{title}</div>
        </div>
        <div className="flex flex-wrap gap-0 gap-y-2 justify-between content-center mt-3.5 whitespace-nowrap rounded-lg">
          <div className="text-2xl font-semibold text-black">{total}</div>
          <div className="flex flex-wrap flex-1 gap-1 content-center pl-5 my-auto text-xs rounded-lg text-zinc-900">
            <div>{percentage}</div>
            <img
              loading="lazy"
              src={icon}
              className="shrink-0 self-start w-4 aspect-square"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartCards;
