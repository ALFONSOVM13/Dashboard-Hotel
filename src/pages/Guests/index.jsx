import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import EditButton from "../../components/EditButton/index";
import SearchBar from "../../components/SearchBar";
import { useDispatch } from "react-redux";

function Guests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const updateDataAndPagination = async () => {
      setData([
        ...users.map((user) => {
          return {
            id: user.id,
            name: user.nombre,
            email: user.email,
            is_Active: user.is_Active === true ? "ACTIVE" : "INACTIVE",
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

  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      setPagination({ ...pagination, items: data.length });
      return;
    }
    const filteredData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.email.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setSearchResults(filteredData);
    setPagination({ ...pagination, page: 1, items: filteredData.length });
  }, [inputValue]);

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
            id: user.id,
            name: user.nombre,
            email: user.email,
            is_Active: user.is_Active === true ? "ACTIVE" : "INACTIVE",
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
            id: user.id,
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

  const handleClick = () => {
    navigate("createguest/newguest");
  };

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <TabTitle title="Guest Management" />
        <SearchBar
          text="Name, Email"
          value={inputValue}
          action={handleInputChange}
        />
      </div>
      <div className="self-start pt-5 pl-5">
        <Button text="New User" onClick={handleClick} />
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
        {inputValue !== "" && searchResults.length === 0 ? (
          <h3>{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <Table
            headers={["ID", "Full Name", "Email", "Status", "Edit"]}
            data={searchResults.length > 0 ? searchResults : data}
            Components={EditButton}
            idName="id"
            size={pagination.size}
            page={pagination.page}
          />
        )}
      </div>
    </>
  );
}

export default Guests;
