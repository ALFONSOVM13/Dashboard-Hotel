import React from "react";
import TabTitle from "../../components/TabTitle";

import Chart from "react-apexcharts";

function Dashboard() {
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
    <div>
      <div className="flex flex-col px-5 pr-10 pt-10 w-full max-md:max-w-full">
        <TabTitle title="Dashboard" />
      </div>
      <div className="flex items-center justify-around pt-10">
        <div className="flex flex-col px-3 pt-3 pb-6 bg-white rounded-2xl leading-[150%] max-w-[300px] shadow-[1px_3px_9px_rgba(100,52,248,0.15)]">
          <div className="flex gap-3.5 text-xs text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08074da68c84a49fab0013ced3078ba88d66faa0618ca6987c5939925e2252de?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
              className="shrink-0 aspect-square w-[27px]"
            />
            <div>Earnings</div>
          </div>
          <div className="flex flex-wrap gap-0 gap-y-2 justify-between content-center mt-3.5 whitespace-nowrap rounded-lg">
            <div className="text-2xl font-semibold text-black">$12.000</div>
            <div className="flex flex-wrap flex-1 gap-1 content-center pl-5 my-auto text-xs rounded-lg text-zinc-900">
              <div>+15.03%</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b71f14f82a020926d0cf8cc7208b853b4002ff858b2dbd2cedb17718f556d0b?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
                className="shrink-0 self-start w-4 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3.5 pt-3 pb-6 bg-white rounded-2xl leading-[150%] max-w-[300px] shadow-[1px_3px_9px_rgba(100,52,248,0.15)]">
          <div className="flex gap-3.5 text-xs text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee8e6c9c0fa83a758561cefaa4eb8aa1e8de7648121f4bed99e0cbb977199bd9?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
              className="shrink-0 aspect-square w-[27px]"
            />
            <div>Reserved Rooms</div>
          </div>
          <div className="flex flex-wrap gap-0 gap-y-2 justify-between content-center mt-3.5 whitespace-nowrap rounded-lg">
            <div className="text-2xl font-semibold text-black">45</div>
            <div className="flex flex-wrap flex-1 gap-1 content-center pl-11 my-auto text-xs rounded-lg text-zinc-900">
              <div>+20.03%</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b71f14f82a020926d0cf8cc7208b853b4002ff858b2dbd2cedb17718f556d0b?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
                className="shrink-0 self-start w-4 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3.5 pt-3 pb-6 bg-white rounded-2xl leading-[150%] max-w-[300px] shadow-[1px_3px_9px_rgba(100,52,248,0.15)]">
          <div className="flex gap-3.5 text-xs text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1242c51032388a9531d3eaee521f873b3f8e649b9081ccbe842d4b3ed5667bf5?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
              className="shrink-0 aspect-square w-[27px]"
            />
            <div>New Users</div>
          </div>
          <div className="flex flex-wrap gap-0 gap-y-2 justify-between content-center mt-3.5 whitespace-nowrap rounded-lg">
            <div className="text-2xl font-semibold text-black">235</div>
            <div className="flex flex-wrap flex-1 gap-1 content-center pl-11 my-auto text-xs rounded-lg text-zinc-900">
              <div>+15.03%</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b71f14f82a020926d0cf8cc7208b853b4002ff858b2dbd2cedb17718f556d0b?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
                className="shrink-0 self-start w-4 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3.5 pt-3 pb-6 bg-white rounded-2xl leading-[150%] max-w-[300px] shadow-[1px_3px_9px_rgba(100,52,248,0.15)]">
          <div className="flex gap-3.5 text-xs text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fe2a6f072147a073273595ea9caa697d3ff60386cb9f632202bd44c4de5fa9?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
              className="shrink-0 aspect-square w-[27px]"
            />
            <div>Sold Offers</div>
          </div>
          <div className="flex flex-wrap gap-0 gap-y-2 justify-between content-center mt-3.5 whitespace-nowrap rounded-lg">
            <div className="text-2xl font-semibold text-black">23</div>
            <div className="flex flex-wrap flex-1 gap-1 content-center pl-11 my-auto text-xs rounded-lg text-zinc-900">
              <div>-5.03%</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e1b530922ce7b950c6bd96aa46a66581cde32a212a39a55847a97c8f43e1da?apiKey=22cfe7d1cd2045f2bf1d80be45287514&"
                className="shrink-0 self-start w-4 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-5">
        <div className="p-5">
          <Chart
            options={options}
            series={series}
            type="area"
            height={350}
            width={850}
          />
        </div>
        <div className="p-5">
          <Chart
            height={350}
            width={600}
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
      <div className="flex flex-col md:flex-row justify-center items-center p-5">
        <div className="p-5">
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
        <div className="p-5">
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
        <div className="p-5">
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
      </div>
    </div>
  );
}

export default Dashboard;
