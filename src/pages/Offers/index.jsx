import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import PaginationControl from "../../components/PaginationControl";
import EditDeleteButtons from "../../components/EditDeleteButtons/ActionsButtons";
import { getAllOffers } from "../../redux/Offers/Actions/actions";
import Loading from "../../components/Loading";
import dataOffers from "../../data";
import OfferForm from "../../components/Forms/OffersForm";

function Offers() {
  const dispatch = useDispatch();
  const { allOffers } = useSelector((state) => state.offersReducer);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [showForm, setShowForm] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [offerToEdit, setOfferToEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    setData(dataOffers)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);*/

  useEffect(() => {
    const timeout = setTimeout(() => {
      const dataFiltered = dataOffers.map((offer) => ({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        price: offer.price,
        imageUrl: offer.imageUrl,
        services: offer.services.join(", "),
      }));
      setData(dataFiltered);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      setPagination({
        ...pagination,
        items: data.length,
      });
    }
  }, [data, loading]);

  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      setPagination({ ...pagination, items: data.length });
      return;
    }
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
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
    console.log(id);
  };

  const handleEdit = (id) => {
    const offerToEdit = data.find((item) => item.id.toString() === id);
    setOfferToEdit(offerToEdit);
    setShowForm(true);
  };

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center mb-3">
          <TabTitle title="Offers Management" />
          {!showForm && (
            <Button
              className="absolute right-10"
              text="New Offer"
              onClick={handleClick}
            />
          )}
          {showForm && (
            <OfferForm
              setShowForm={setShowForm}
              offerToEdit={offerToEdit}
              setOfferToEdit={setOfferToEdit}
            />
          )}
        </div>
        <SearchBar text="Name" value={inputValue} action={handleInputChange} />
      </div>
      <div className="self-start pt-5 pl-5"></div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Loading state={loading}>
          {inputValue !== "" && searchResults.length === 0 ? (
            <h3>{`No results for "${inputValue}" search...`}</h3>
          ) : (
            <Table
              headers={[
                "Image",
                "ID",
                "Name",
                "Description",
                "Price",
                "Services",
                "Actions",
              ]}
              data={searchResults.length > 0 ? searchResults : data}
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
        </Loading>
      </div>
    </>
  );
}

export default Offers;
