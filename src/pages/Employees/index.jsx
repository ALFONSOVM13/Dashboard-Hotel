import React, { useEffect, useState } from "react";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import SearchBar from "../../components/SearchBar";
import PaginationControl from "../../components/PaginationControl";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmployeeStatus,
  getAllEmployees,
} from "../../redux/Employees/Actions/actions";
import { reconectar } from "../../utils";
import NewButton from "../../components/NewButton";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Employees() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { allEmployees } = useSelector((state) => state.employeesReducer);
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
      return await dispatch(getAllEmployees())
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
    if (allEmployees.length > 0) {
      console.log(allEmployees);
      setData([
        ...allEmployees.map(
          ({
            id,
            email,
            emailVerified,
            guest_profile,
            is_active,
            username,
          }) => ({
            id,
            full_name: guest_profile ? guest_profile.full_name : "Not defined",
            username,
            email: { email, emailVerified },
            phone: guest_profile ? guest_profile.phone_number : "Not defined",
            is_active,
          })
        ),
      ]);
      setPagination({
        ...pagination,
        items: allEmployees.length,
      });
      console.log(allEmployees);
    }
  }, [allEmployees]);

  return (
    <div className="flex flex-col px-5 pt-10 w-full max-md:max-w-full">
      <TabTitle title="Employees" />
      {/* <NewButton text={"New Employee"} onClick={() => navigate("create")} /> */}
      <SearchBar
        text="User name, Full name, Email"
        value={inputValue}
        action={handleInputChange}
      />
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Loading state={loading}>
          {inputValue !== "" && searchResults.length === 0 ? (
            <h3>{`No results for "${inputValue}" search...`}</h3>
          ) : (
            <Table
              headers={[
                "Full name",
                "User name",
                "Email",
                "Phone",
                "Status",
                "Actions",
              ]}
              data={searchResults.length > 0 ? searchResults : data}
              idName="id"
              size={pagination.size}
              page={pagination.page}
              omitt="id"
              Components={BotonesAccion}
            />
          )}
        </Loading>
      </div>
    </div>
  );
}

function BotonesAccion({ id, data }) {
  const [state, setState] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data.is_active);
    setState(data.is_active);
  }, [data]);

  const handleChangeState = (e) => {
    console.log(state);
    dispatch(changeEmployeeStatus(id, !state))
      .then(() => console.log("Hecho"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex gap-3 text-white font-bold">
      <Button className={"bg-blue-700"} action={() => navigate(`edit/${id}`)}>
        Edit{" "}
      </Button>
      <Button
        action={handleChangeState}
        className={state ? "bg-red-700" : "bg-green-700"}
      >
        {state ? "Deactivate" : "Activate"}
      </Button>
    </div>
  );
}

export default Employees;
