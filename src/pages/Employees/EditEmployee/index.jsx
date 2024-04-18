import React, { useEffect, useState } from "react";
import TabTitle from "../../../components/TabTitle";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmployeeForm from "../../../components/EmployeeForm";
import { getEmployee } from "../../../redux/Employees/Actions/actions";
import Loading from "../../../components/Loading";
import { reconectar } from "../../../utils";

const EditEmployee = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { selectedEmployee } = useSelector((state) => state.employeesReducer);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const obtenerData = async () => {
      return await dispatch(getEmployee(id))
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

  return (
    <>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-between items-center">
          <TabTitle title={"Edit Employee"} />
          <Loading state={loading}>
            <EmployeeForm data={selectedEmployee} />
          </Loading>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
