import { useState, useEffect } from "react";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import ActionsUsersButtons from "../../components/UsersButtons/ActionsUsersButtons/ActionsUsersButtons";
import plates from "../../dataRestaurant";
import FoodForm from "../../components/Forms/FoodForm";

function RestaurantMenu() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    const updateDataAndPagination = async () => {
      setData([
        ...plates.map((plate) => {
          return {
            name: plate.nombre,
            image: plate.imagen,
            description: plate.descripcion,
            category: plate.categoria,
            price: plate.precio,
          };
        }),
      ]);

      setPagination({
        ...pagination,
        items: plates.length,
      });
    };
    updateDataAndPagination();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <>
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <TabTitle title="Restaurant Menu" />
        <div className="flex gap-3 px-9 py-5 mt-14 text-xs tracking-normal bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b49e8b3c1539f4661f5272c04b5763e602f8c805eae3399076c480b60b8e19d?"
            className="shrink-0 w-5 aspect-square"
          />
          <input
            type="text"
            placeholder="Name, Category"
            className="flex-grow my-auto max-md:max-w-full bg-white text-base"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="self-start pt-5 pl-5">
        {!showForm && <Button text="NEW PLATE" onClick={handleClick} />}
        {showForm && <FoodForm setShowForm={setShowForm} />}
      </div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Table
          headers={[
            "Nombre",
            "Imagen",
            "Descripcion",
            "Categoria",
            "Precio",
            "Actions",
          ]}
          data={data}
          Components={ActionsUsersButtons}
          idName="platesTable"
          size={pagination.size}
          page={pagination.page}
        />
      </div>
    </>
  );
}

export default RestaurantMenu;
