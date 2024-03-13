function Guests() {
  return (
    <div className="flex flex-col px-5">
      <div className="self-start ml-6 text-4xl font-semibold tracking-wide whitespace-nowrap text-neutral-500 max-md:ml-2.5">
        Guest Management
      </div>
      <div className="flex gap-3 px-9 py-6 mt-11 text-base tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b49e8b3c1539f4661f5272c04b5763e602f8c805eae3399076c480b60b8e19d?"
          className="shrink-0 w-5 aspect-square"
        />
        <input
          type="text"
          placeholder="Name, Status, E-mail"
          className="flex-grow my-auto max-md:max-w-full bg-white"
        />
      </div>
      <div className="flex gap-5 justify-between self-center mt-8 w-full max-w-[1026px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center text-base font-semibold tracking-normal text-center text-white whitespace-nowrap">
          <button className="justify-center items-center px-16 py-4 rounded shadow-sm bg-blue-950 max-md:px-5">
            New
          </button>
        </div>
        <div className="flex gap-5 justify-between px-5 max-w-[658px] max-md:flex-wrap">
          <div className="flex gap-2.5 my-auto text-base tracking-normal whitespace-nowrap">
            <div className="grow text-gray-500">Show results by:</div>
            <div className="text-sky-500">10</div>
            <button type="button" className="cursor-pointer">
              <input
                type="image"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b834403ec30943ade687ba10871ed3dd113d3c7469decfa971c2bba0aba43b8?"
                className="shrink-0 my-auto aspect-[2.33] fill-zinc-400 w-[20px]"
              />
            </button>
          </div>
          <div className="flex gap-3.5 items-center">
            <div className="grow self-stretch my-auto text-base tracking-normal text-gray-500">
              Showing
            </div>
            <div className="self-stretch my-auto text-base font-bold tracking-normal text-gray-500">
              20-30
            </div>
            <div className="self-stretch my-auto text-base tracking-normal text-gray-500">
              of
            </div>
            <div className="self-stretch my-auto text-base font-bold tracking-normal text-gray-500">
              1233
            </div>
            <div className="inline-flex -space-x-px">
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                disabled
              >
                &lt;&lt;
              </button>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                disabled
              >
                &lt;
              </button>
              <span id="page">1</span>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                disabled
              >
                &gt;
              </button>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                disabled
              >
                &gt;&gt;
              </button>
            </div>
          </div>
          <div className="flex gap-4 self-start mt-3 text-base tracking-normal">
            <div className="text-gray-500">
              <span className="text-gray-500">Filter:</span>{" "}
            </div>
            <div className="text-sky-500">All</div>
            <button type="button" className="cursor-pointer">
              <input
                type="image"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b834403ec30943ade687ba10871ed3dd113d3c7469decfa971c2bba0aba43b8?"
                className="shrink-0 my-auto aspect-[2.33] fill-zinc-400 w-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guests;
