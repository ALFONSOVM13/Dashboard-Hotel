import React from "react";

function PaginationControl() {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex z-10 gap-3.5 items-center self-end mt-0 mr-16 text-xs tracking-normal text-gray-500 whitespace-nowrap max-md:mr-2.5">
          <div className="self-stretch my-auto">Showing</div>
          <div className="self-stretch my-auto font-bold">20-30</div>
          <div className="self-stretch my-auto">of</div>
          <div className="self-stretch my-auto font-bold">1233</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7851b68a5f8e7551ebaae32fca51b3cb3d8db144600473bfebb6246c8b3764b2?"
            className="shrink-0 self-stretch w-28 max-w-full aspect-[4.35]"
          />
        </div>

        <div className="flex gap-5 w-[180px] text-xs items-center">
          <div className="self-stretch my-auto text-gray-500">
            Show results by:
          </div>
          <div className="text-sky-500">10</div>
          <div className="flex gap-2.5 self-center mt-0 text-xs tracking-normal whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b834403ec30943ade687ba10871ed3dd113d3c7469decfa971c2bba0aba43b8?"
              className="shrink-0 my-auto aspect-[2.33] fill-zinc-400 w-[7px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginationControl;
