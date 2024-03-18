import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteFood,
  getAllFoods,
} from "../../redux/FoodsReducer/Actions/actions";

import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import EditDeleteButtons from "../../components/EditDeleteButtons/ActionsButtons";
import FoodForm from "../../components/Forms/FoodForm";
import SearchBar from "../../components/SearchBar";
import alertFunctions from "../../utils/alerts";

function RestaurantMenu() {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.allFoods);
  const [inputValue, setInputValue] = useState("");
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [showForm, setShowForm] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [foodToEdit, setFoodToEdit] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllFoods()).then(() => {
      setDataLoaded(true);
    });
  }, [dispatch]);

  useEffect(() => {
    if (dataLoaded) {
      setPagination({
        ...pagination,
        items: allFoods.length,
      });
    }
  }, [allFoods, dataLoaded]);

  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      setPagination({ ...pagination, items: allFoods.length });
      return;
    }
    const filteredData = allFoods.filter((item) => {
      return (
        item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.category.toLowerCase().includes(inputValue.toLowerCase())
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

  const handleDelete = (id) => {
    alertFunctions.seeAlert(
      dispatch,
      id,
      null,
      deleteFood,
      "¿Estas seguro que quieres borrarlo?",
      ["Borrado correctamente", "", "success"]
    );
    setInputValue("");
  };

  const handleEdit = (id) => {
    const foodToEdit = allFoods.find((item) => item.id.toString() === id);
    setFoodToEdit(foodToEdit);
    setShowForm(true);
  };

  return (
    <>
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <TabTitle title="Restaurant Menu" />
        <SearchBar
          text="Name, Category"
          value={inputValue}
          action={handleInputChange}
        />
      </div>
      <div className="self-start pt-5 pl-5">
        {!showForm && <Button text="NEW PLATE" onClick={handleClick} />}
        {showForm && (
          <FoodForm
            setShowForm={setShowForm}
            foodToEdit={foodToEdit}
            setFoodToEdit={setFoodToEdit}
          />
        )}
      </div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        {inputValue !== "" && searchResults.length === 0 ? (
          <h3>{`No results for "${inputValue}" search...`}</h3>
        ) : (
          <Table
            headers={[
              "ID",
              "Nombre",
              "Precio",
              "Descripcion",
              "Categoria",
              "Image",
              "Actions",
            ]}
            data={searchResults.length > 0 ? searchResults : allFoods}
            Components={(props) => (
              <EditDeleteButtons
                {...props}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )}
            idName="id"
            size={pagination.size}
            page={pagination.page}
          />
        )}
      </div>
    </>
  );
}

export default RestaurantMenu;
