import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import EditButton from "../../components/EditButton/index";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/Users/Actions/actions";
import { reconectar } from "../../utils";
import CreateGuest from "./CreateGuest";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import Loading from "../../components/Loading";

function Guests() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.usersReducer);
  const [showForm, setShowForm] = useState(false);
  const {
    pagination,
    setPagination,
    searchResults,
    inputValue,
    handleInputChange,
    data,
    setData,
  } = useTableSearchPagination();

  useEffect(() => {
    const obtenerData = async () => {
      return await dispatch(getAllUsers())
        .then(() => {
          setLoading(false);
          return true;
        })
        .catch(() => false);
    };
    const rec = async () => {
      await reconectar(obtenerData);
    };
    rec();
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      setData([...allUsers]);
      setPagination({
        ...pagination,
        items: allUsers.length,
      });
    }
    console.log(allUsers);
  }, [allUsers]);

  const handleClick = () => {
    setShowForm(true);
  };

  const mapData = (dataArray) => {
    return dataArray.map((item) => {
      const { id, username, guest_profile, email } = item;
      return {
        id,
        username,
        full_name: guest_profile ? guest_profile.full_name : "Not specified",
        email,
      };
    });
  };

  return (
    <Loading state={loading}>
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
            headers={["Username", "Fullname", "Email", "Edit"]}
            data={mapData(searchResults.length > 0 ? searchResults : allUsers)}
            Components={EditButton}
            idName="id"
            size={pagination.size}
            page={pagination.page}
            omitt="id"
          />
        )}
      </div>
    </Loading>
  );
}

export default Guests;
