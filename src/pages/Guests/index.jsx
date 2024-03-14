import { useState } from "react";
import users from "../../data";
import Users from "../../components/Users/Users";

function Guests() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInputValue(value);
  };

  const handleNewClick = () => {
    console.log("hiciste click en new");
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="flex flex-col px-5 w-full">
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
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-around items-center self-center mt-6  w-full">
        <div>
          <div className="flex flex-col flex-1 justify-center text-base font-semibold tracking-normal text-center text-white whitespace-nowrap">
            <button
              className="justify-center items-center px-16 py-4 rounded shadow-sm bg-blue-950 max-md:px-5"
              onClick={handleNewClick}
            >
              New
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2.5 my-auto text-base tracking-normal whitespace-nowrap ">
            <div className="grow text-gray-500">Show results by:</div>
            <select
              name="cuantity"
              className=" bg-white text-sky-500 text-lg w-12 h-8"
            >
              <option value="tres">3</option>
              <option value="cuatro">4</option>
              <option value="cinco">5</option>
              <option value="seis">6</option>
              <option value="siete">7</option>
            </select>
          </div>
        </div>
        <div>
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
            <div className="inline-flex -space-x-* justify-center">
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                onClick={handleFirstPage}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <span
                id="page"
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                {currentPage}
              </span>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
              <button
                className="flex items-center justify-center cursor-pointer mx-2 px-3 h-8 text-gray-500 bg-gray-50 border border-black rounded-s-lg "
                onClick={handleLastPage}
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 self-start mt-3 text-base tracking-normal">
            <div className="text-gray-500">
              <span className="text-gray-500">Filter:</span>{" "}
            </div>

            <select
              name="filter"
              className=" bg-white text-sky-500 text-lg w-full h-8"
            >
              <option value="active">Activ</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around items-center py-6 my-6 text-base tracking-normal bg-white text-slate-400">
          <div>Nombre y Apellido</div>
          <div>Email</div>
          <div>Status</div>
          <div>Edit</div>
        </div>

        <div>
          <div className="flex justify-around items-center py-6 text-base tracking-normal bg-white text-slate-400">
            <div>Ileana</div>
            <div>ile²mail.com</div>
            <div>active</div>
            <div>icono</div>
          </div>
          <div className="flex justify-around items-center py-6 text-base tracking-normal bg-white text-slate-400">
            <div>Ileana</div>
            <div>ile²mail.com</div>
            <div>active</div>
            <div>icono</div>
          </div>
          <div className="flex justify-around items-center py-6 text-base tracking-normal bg-white text-slate-400">
            <div>Ileana</div>
            <div>ile²mail.com</div>
            <div>active</div>
            <div>icono</div>
          </div>
          <Users users={users} />
        </div>
      </div>
    </div>
  );
}

export default Guests;
