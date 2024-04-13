import React, { useEffect } from "react";
import TabTitle from "../../components/TabTitle";
import Button from "../../components/NewButton";
import SearchBar from "../../components/SearchBar";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import PaginationControl from "../../components/PaginationControl";
import Table from "../../components/Table";
import Loading from "../../components/Loading";
import dataServices from "../../dataService";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditDeletButtons from "../../components/EditDeleteButtons/ActionsButtons";

function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
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
    setData([...dataServices]);
    setPagination({ ...pagination, items: data.length });
    setLoading(false);
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center mb-3">
          <TabTitle title="Services" />
          <Button
            className="absolute right-10"
            text={"Create service"}
            onClick={() => navigate("newService")}
          />
        </div>
        <SearchBar text="Name" value={inputValue} action={handleInputChange} />
      </div>
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Loading state={loading}>
          {inputValue !== "" && searchResults.length === 0 ? (
            <h3>{`No results for "${inputValue}" search...`}</h3>
          ) : (
            <Table
              headers={[
                "Image",
                "Type",
                "Name",
                "Price",
                "Description",
                "Actions",
              ]}
              data={searchResults.length > 0 ? searchResults : data}
              idName="id"
              Components={EditDeletButtons}
              size={pagination.size}
              page={pagination.page}
              omitt="id"
            />
          )}
        </Loading>
      </div>
    </>
  );
}

export default Services;
