import React, { useEffect } from "react";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import SearchBar from "../../components/SearchBar";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import Loading from "../../components/Loading";
import dataServices from "../../dataService";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditDeleteButtons from "../../components/EditDeleteButtons/ActionsButtons";
import {
  deleteCar,
  getCarServices,
  getSpaServices,
} from "../../redux/Services/Actions/actions";
import { reconectar } from "../../utils";

function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carServices } = useSelector((state) => state.servicesReducer);
  const { spaServices } = useSelector((state) => state.servicesReducer);
  const [loading, setLoading] = useState(true);
  const [carsState, setCarsState] = useState(false);
  const [spaState, setSpaState] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

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
      return await dispatch(getCarServices())
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
    const obtenerData = async () => {
      return await dispatch(getSpaServices())
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
    if (carsState) {
      if (carServices.length > 0) {
        setData([...carServices]);
        setPagination({
          ...pagination,
          items: carServices.length,
        });
      }
    } else if (spaState) {
      if (spaServices.length > 0) {
        setData([...spaServices]);
        setPagination({
          ...pagination,
          items: spaServices.length,
        });
      }
    }
  }, [carServices, spaServices, spaState, carsState]);

  const mapCar = (dataArray) => {
    return dataArray.map((item) => {
      const { id, brands, passenger, price_per_day, transmision, status } =
        item;
      return {
        id,
        brands,
        passenger,
        price_per_day,
        transmision,
        status,
      };
    });
  };

  const mapSpa = (dataArray) => {
    return dataArray.map((item) => {
      const { id, name, service_type, price, room_status } = item;
      const serviceTypeString = Array.isArray(service_type)
        ? service_type.join(", ")
        : service_type;
      return {
        id,
        name,
        service_type: serviceTypeString,
        price,
        room_status,
      };
    });
  };

  const handleEdit = (id) => {
    const carToEdit = carServices.find((item) => item.id.toString() === id);
    if (carToEdit !== undefined) {
      navigate(`car/${id}`, {
        state: { serviceToEdit: carToEdit },
      });
    } else {
      const spaToEdit = spaServices.find((item) => item.id.toString() === id);
      if (spaToEdit !== undefined) {
        navigate(`spa/${id}`, {
          state: { serviceToEdit: spaToEdit },
        });
      } else {
        console.log("No se encontró el servicio para editar.");
      }
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Warning",
      text: "Are you sure you want to delete this spa serice?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch(deleteCar(id));
        Swal.fire(`Spa service deleted successfully`, "", "success");
      } else if (response.isDismissed) {
        return;
      }
    });
  };

  const handleCarsList = () => {
    setCarsState(true);
    setSpaState(false);
  };

  const handleSpaList = () => {
    setSpaState(true);
    setCarsState(false);
  };

  const handleCreate = () => {
    Swal.fire({
      title: "Select Service",
      text: "Which service do you want to create?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#acca14",
      confirmButtonText: "New Car",
      cancelButtonText: "New Spa",
    }).then((response) => {
      if (response.isConfirmed) {
        navigate("newCar");
      } else if (response.isDismissed) {
        navigate("newSpa");
      }
    });
  };

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center mb-3">
          <TabTitle title="Services" />
          <Button
            className="absolute right-10"
            text={"New Service"}
            onClick={handleCreate}
          />
        </div>
        <SearchBar text="Name" value={inputValue} action={handleInputChange} />
      </div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <div className="">
          <button
            type="button"
            className={`text-black mr-4 px-4 py-2 text-lg rounded-md ${
              selectedButton === "cars" ? "bg-amber-500" : "bg-amber-300"
            } hover:bg-amber-500 transition-colors`}
            onClick={() => {
              setSelectedButton("cars");
              handleCarsList();
            }}
          >
            CARS
          </button>

          <button
            type="button"
            className={`text-black ml-4 px-4 py-2 text-lg rounded-md ${
              selectedButton === "spa" ? "bg-amber-500" : "bg-amber-300"
            } hover:bg-amber-500 transition-colors mb-11`}
            onClick={() => {
              setSelectedButton("spa");
              handleSpaList();
            }}
          >
            MASSAGE Y SPA
          </button>
        </div>

        {inputValue !== "" && searchResults.length === 0 ? (
          <h3>{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <>
            {carsState ? (
              <Loading state={loading}>
                <Table
                  headers={[
                    "Brands",
                    "Passenger",
                    "Price",
                    "Transmision",
                    "Status",
                    "Actions",
                  ]}
                  data={mapCar(searchResults.length > 0 ? searchResults : data)}
                  idName="id"
                  Components={(props) => (
                    <EditDeleteButtons
                      {...props}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )}
                  size={pagination.size}
                  page={pagination.page}
                  omitt="id"
                />
              </Loading>
            ) : null}
            {spaState ? (
              <Loading state={loading}>
                <Table
                  headers={[
                    "Name",
                    "Service Type",
                    "Price per day",
                    "Status",
                    "Actions",
                  ]}
                  data={mapSpa(searchResults.length > 0 ? searchResults : data)}
                  idName="id"
                  Components={(props) => (
                    <EditDeleteButtons
                      {...props}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )}
                  size={pagination.size}
                  page={pagination.page}
                  omitt="id"
                />
              </Loading>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}

export default Services;
