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
import axios from "axios";
import Cookies from "js-cookie";
import CreateGuest from "./CreateGuest";

function Guests() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.usersReducer);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers())
      .then(() => {
        setDataLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  useEffect(() => {
    if (dataLoaded) {
      setPagination({
        ...pagination,
        items: allUsers.length,
      });
    }
  }, [allUsers, dataLoaded]);

  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      setPagination({ ...pagination, items: allUsers.length });
      return;
    }
    const filteredData = allUsers.filter((item) => {
      return (
        item.username.toLowerCase().includes(inputValue.toLowerCase()) ||
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
    setShowForm(true);
  };

  const mapData = (dataArray) => {
    return dataArray.map((item) => {
      const { id, username, email, role } = item;
      return { id, username, email, role };
    });
  };

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center mb-3">
          <TabTitle title="Guest Management" />
          <Button
            className="absolute right-10"
            text={"Register a new user"}
            onClick={handleClick}
          />
          {showForm && <CreateGuest setShowForm={setShowForm} />}
        </div>
        <SearchBar
          text="Name, Email"
          value={inputValue}
          action={handleInputChange}
        />
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
            data={mapData(searchResults.length > 0 ? searchResults : allUsers)}
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
