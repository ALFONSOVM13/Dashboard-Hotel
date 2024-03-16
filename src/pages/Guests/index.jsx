import { useEffect, useState } from "react";
import users from "../../data";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import ActionsUsersButtons from "../../components/UsersButtons/ActionsUsersButtons/ActionsUsersButtons";

function Guests() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const updateDataAndPagination = async () => {
      setData([
        ...users.map((user) => {
          return {
            name: user.nombre,
            email: user.email,
            is_Active: user.is_Active === true ? "ACTIVE" : "DISACTIVE",
          };
        }),
      ]);
      setPagination({
        ...pagination,
        items: users.length,
      });
    };
    updateDataAndPagination();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    if (filterValue === "all") {
      setData([
        ...users.map((user) => {
          return {
            name: user.nombre,
            email: user.email,
            is_Active: user.is_Active === true ? "ACTIVE" : "DISACTIVE",
          };
        }),
      ]);
      setPagination({
        ...pagination,
        items: users.length,
      });
    } else {
      var boolValue = filterValue === "true";
      const filtered = users.filter((user) => user.is_Active === boolValue);
      setData([
        ...filtered.map((user) => {
          return {
            name: user.nombre,
            email: user.email,
            is_Active: user.is_Active === true ? "ACTIVE" : "INACTIVE",
          };
        }),
      ]);
      setPagination({
        ...pagination,
        items: filtered.length,
      });
    }
  };

  return (
    <div className="flex flex-col w-full pl-[330px]">
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <TabTitle title="Guest Management" />
        <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b49e8b3c1539f4661f5272c04b5763e602f8c805eae3399076c480b60b8e19d?"
            className="shrink-0 w-5 aspect-square"
          />
          <input
            type="text"
            placeholder="Name, E-mail"
            className="flex-grow my-auto max-md:max-w-full bg-white text-base"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="self-start pt-5 pl-5">
        <Button text="New User" />
      </div>
      <div className="flex flex-col justify-between px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between items-center">
          <PaginationControl pagination={pagination} control={setPagination} />
          <div>
            <div className="flex items-center gap-4 self-start mt-3 text-base tracking-normal">
              <div className="text-gray-500">
                <span className="text-gray-500">Status filter:</span>{" "}
              </div>

              <select
                name="filter"
                defaultValue={"DEFAULT"}
                className=" bg-white text-sky-500 text-lg w-full h-8"
                onChange={handleFilterChange}
              >
                <option value="DEFAULT" disabled hidden>
                  --
                </option>
                <option value="true">Activ</option>
                <option value="false">Inactive</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>
        <Table
          headers={["Name", "Email", "Status", "Actions"]}
          data={data}
          Components={ActionsUsersButtons}
          idName="usersTable"
          size={pagination.size}
          page={pagination.page}
        />
      </div>
    </div>
  );
}

export default Guests;
