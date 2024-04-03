import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../data";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import EditButton from "../../components/EditButton/index";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/Users/Actions/actions";

function Guests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.usersReducer);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const updateDataAndPagination = async () => {
      dispatch(getAllUsers());
      setData(users);
      setPagination({
        ...pagination,
        items: data.length,
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
        item.nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
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

  const handleClick = () => {
    navigate("createguest/newguest");
  };

  const mapData = (dataArray) => {
    return dataArray.map((item) => {
      const { id, nombre, email, rol } = item;
      return { id, nombre, email, rol };
    });
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
        </div>
        {inputValue !== "" && searchResults.length === 0 ? (
          <h3>{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <Table
            headers={["ID", "Full Name", "Email", "Rol", "Edit"]}
            data={mapData(searchResults.length > 0 ? searchResults : data)}
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
