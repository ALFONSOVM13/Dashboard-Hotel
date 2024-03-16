/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
function PaginationControl({ pagination, control }) {
  const goStart = () => {
    if (pagination.page > 1) {
      control({ ...pagination, page: 1 });
    }
  };

  const previous = () => {
    if (pagination.page > 1) {
      control({
        ...pagination,
        page: pagination.page - 1,
      });
    }
  };

  const next = () => {
    const lastPage = Math.ceil(pagination.items / pagination.size);
    if (lastPage > pagination.page) {
      control({
        ...pagination,
        page: pagination.page + 1,
      });
    }
  };

  const goEnd = () => {
    const lastPage = Math.ceil(pagination.items / pagination.size);
    control({
      ...pagination,
      page: lastPage,
    });
  };

  const changeResultsQuantity = (e) => {
    control({
      ...pagination,
      size: e.target.value,
      page: 1,
    });
  };
  return (
    <>
      <div className="flex w-full justify-between mb-5">
        <div className="flex z-10 gap-3.5 items-center self-end mt-0 mr-16 text-xs tracking-normal text-gray-500 whitespace-nowrap max-md:mr-2.5">
          <div className="self-stretch my-auto">Showing</div>
          <div className="self-stretch my-auto font-bold">
            {pagination.size * (pagination.page - 1) +
              "-" +
              pagination.size * pagination.page}
          </div>
          <div className="self-stretch my-auto">of</div>
          <div className="self-stretch my-auto font-bold">
            {pagination.items}
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler cursor-pointer icon-tabler-square-chevrons-left-filled"
              onClick={goStart}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="#ff2825"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-2.293 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32zm-5 0a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler cursor-pointer icon-tabler-square-chevron-left-filled"
              onClick={previous}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="#ff2825"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5.293 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <span className="w-5 h-5 m-auto font-bold">{pagination.page}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler cursor-pointer icon-tabler-square-chevron-right-filled"
              onClick={next}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="#ff2825"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7.387 6.21a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-3 -3z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler cursor-pointer icon-tabler-square-chevrons-right-filled"
              onClick={goEnd}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke="#ff2825"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-10.387 6.21a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-3 -3zm5 0a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-3 -3z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-5 w-[180px] text-xs items-center">
          <div className="self-stretch my-auto text-gray-500">
            Show results by:
          </div>
          <div className="relative inline-flex">
            <select
              className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              onChange={changeResultsQuantity}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.95 5.95a1.24 1.24 0 1 0-1.76 1.76l3.54 3.54h-9.48a1 1 0 1 0 0 2h9.48l-3.54 3.54a1.24 1.24 0 0 0 1.76 1.76l5.66-5.66a1.24 1.24 0 0 0 0-1.76l-5.66-5.66z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginationControl;
