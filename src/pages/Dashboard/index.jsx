import { useEffect, useState } from "react";
import TabTitle from "../../components/TabTitle";
import Chart from "react-apexcharts";
import { obtenerUsuarioPorMes } from "../../utils/UsersByMonth/usersByMonth";
import { obtenerPorcetajeDeUsuarios } from "../../utils/UsersByMonth/obtenerPorcetajeDeUsuarios";
import ChartCards from "../../components/ChartCards";
const { VITE_BACKEND_URL } = import.meta.env;
import Cookies from "js-cookie";
import Loading from "../../components/Loading";

function Dashboard() {
  const [userByMonth, setUserByMonth] = useState({});
  const [userByDay, setUserByDay] = useState({});
  const [loading, setLoading] = useState(true);
  var urlImagenPositivo =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9b71f14f82a020926d0cf8cc7208b853b4002ff858b2dbd2cedb17718f556d0b?apiKey=22cfe7d1cd2045f2bf1d80be45287514&";
  var urlImagenNegativo =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a7e1b530922ce7b950c6bd96aa46a66581cde32a212a39a55847a97c8f43e1da?apiKey=22cfe7d1cd2045f2bf1d80be45287514&";

  useEffect(() => {
    (async () => {
      await fetch(`${VITE_BACKEND_URL}/api/charts/users`, {
        headers: { authorization: `Bearer ${Cookies.get("token")}` },
      })
        .then((response) => response.json())
        .then((response) => {
          setUserByMonth(response.totalUsersByMonth);
          setUserByDay(response.totalUsersByDay);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  const userSeries =
    userByDay && userByDay.days
      ? userByDay.days.map((day, index) => ({
          name: day,
          data: [userByDay.totalUsersByDay[index]],
        }))
      : [];

  const options = {
    chart: {
      background: "#ede9f5",
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Cost Control",
      align: "center",
      style: {
        fontSize: 25,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return `$${val}`;
        },
      },
    },
  };
  const series = [
    {
      name: "Profits",
      data: [34000, 120000, 200000, 150000, 250000, 120000],
    },
  ];
  return (
    <Loading state={loading}>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <TabTitle title="Dashboard" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-5 w-full max-w-[1500px] mx-auto items-center justify-around pt-10">
        <ChartCards
          title="Earnings"
          total="$12.000"
          percentage="+15.03%"
          icon={urlImagenPositivo}
        />
        <ChartCards
          title="Reserved Rooms"
          total="45"
          percentage="+20.03%"
          icon={urlImagenPositivo}
        />
        <ChartCards
          title={`New Users in ${new Date().toLocaleString("en-US", {
            month: "long",
          })}`}
          total={obtenerUsuarioPorMes(userByMonth)}
          percentage={obtenerPorcetajeDeUsuarios(userByMonth)}
          icon={
            obtenerPorcetajeDeUsuarios(userByMonth) > 0
              ? urlImagenPositivo
              : urlImagenNegativo
          }
        />
        <ChartCards
          title="Sold Offers"
          total="23"
          percentage="-5.03%"
          icon={urlImagenNegativo}
        />
      </div>
      {/* Graphics */}
      <div className="flex flex-col xl:flex-row justify-center items-center p-5">
        <div className="p-5 rounded-xl">
          <Chart
            options={options}
            series={series}
            type="area"
            height={350}
            width={450}
          />
        </div>
        <div className="p-5 rounded-xl ">
          <Chart
            height={350}
            width={450}
            type="bar"
            series={[
              { name: "Car Rental", data: [7, 5, 10] },
              { name: "Spa", data: [12, 15, 5] },
              { name: "Massages", data: [18, 20, 10] },
            ]}
            options={{
              chart: {
                background: "#ede9f5",
              },
              title: {
                text: "Rented Services",
                align: "center",
                style: {
                  fontSize: 25,
                },
              },
              stroke: {
                curve: "smooth",
              },
              colors: ["#2b908f", "#69d2e7", "#9fe391", "#f9a3a4"],
              xaxis: {
                categories: ["January", "February", "March"],
              },
              yaxis: {
                enabled: false,
                labels: {
                  formatter: (val) => {
                    return `Customers: ${val}`;
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center p-5">
        <div className="p-5 rounded-xl">
          <Chart
            height={350}
            width={450}
            type="donut"
            series={[45000, 35000, 50000]}
            options={{
              chart: {
                background: "#ede9f5",
              },
              title: {
                text: "Earnings from service",
                align: "center",
                style: {
                  fontSize: 25,
                },
              },
              tooltip: {
                y: {
                  formatter: function (value) {
                    return `$${value}`;
                  },
                },
              },
              colors: ["#2b908f", "#69d2e7", "#9fe391", "#f9a3a4"],
              legend: {
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
              },
              labels: ["Spa", "Car Rental", "Massages"],
            }}
          />
        </div>
        <div className="p-5 rounded-xl">
          <Chart
            height={350}
            width={450}
            type="area"
            series={[
              {
                name: "Reserved Rooms",
                data: [8, 12, 20, 15, 25, 18],
              },
            ]}
            options={{
              chart: {
                background: "#ede9f5",
              },
              dataLabels: {
                enabled: false,
              },
              title: {
                text: "Reserved Rooms per Month",
                align: "center",
                style: {
                  fontSize: 25,
                },
              },
              xaxis: {
                categories: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                ],
              },
              yaxis: {
                min: 0,
                max: 40,
                labels: {
                  formatter: (val) => {
                    return `Rooms: ${val}`;
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center p-5">
        <div className="p-5 rounded-xl">
          <Chart
            height={350}
            width={450}
            type="bar"
            series={[
              { name: "Relax Night", data: [4] },
              { name: "Month of Love", data: [8] },
              { name: "Weekend XL", data: [5] },
              { name: "35% off", data: [10] },
            ]}
            options={{
              chart: {
                background: "#ede9f5",
              },
              yaxis: {
                enabled: false,
                labels: {
                  formatter: (val) => {
                    return `Customers: ${val}`;
                  },
                },
              },
              colors: ["#2b908f", "#69d2e7", "#9fe391", "#f9a3a4"],
              title: {
                text: "Purchased Offers",
                align: "center",
                style: {
                  fontSize: 25,
                },
              },
              xaxis: {
                categories: ["January"],
              },
            }}
          />
        </div>
        <div className="p-5 rounded-xl">
          <Chart
            height={350}
            width={450}
            type="bar"
            series={userSeries}
            options={{
              chart: {
                background: "#ede9f5",
              },
              yaxis: {
                enabled: false,
                labels: {
                  formatter: (val) => {
                    return `Users: ${val}`;
                  },
                },
              },
              legend: {
                show: false,
              },
              colors: ["#2b908f", "#69d2e7", "#9fe391", "#f9a3a4"],
              title: {
                text: "Users Registered by Day",
                align: "center",
                style: {
                  fontSize: 25,
                },
              },
              xaxis: {
                categories: [
                  `${new Date().toLocaleString("en-US", {
                    month: "long",
                  })}`,
                ],
              },
            }}
          />
        </div>
      </div>
    </Loading>
  );
}

export default Dashboard;
