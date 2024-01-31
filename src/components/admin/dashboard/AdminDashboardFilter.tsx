/* eslint-disable @typescript-eslint/no-unused-vars */
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import React from "react";

type props = {
  setQueryParam: React.Dispatch<React.SetStateAction<string>>;
};

const AdminDashboardFilter = ({ setQueryParam }: props) => {
  const dailyQueryHandler = () => {
    const today = new Date();
    const dateNumber = today.getDate();
    const monthNumber = today.getMonth() + 1;
    const year = today.getFullYear().toString();

    const date = dateNumber.toString();
    const month = monthNumber.toString();

    const queryStr = `?startDate=${year}-${
      month.length === 1 ? "0" + month : month
    }-${date.length === 1 ? "0" + date : date}`;

    setQueryParam(queryStr);
  };

  const timeHandler = (day: number) => {
    // date calculation
    const today = new Date();
    const currentTime = today.getTime();
    const oneDayTime = 1000 * 60 * 60 * 24;
    const removeTime = oneDayTime * day;
    const targetTime = currentTime - removeTime;
    const targetDay = new Date(targetTime);

    // get individual date
    const dateNumber = targetDay.getDate();
    const monthNumber = targetDay.getMonth() + 1;
    const year = targetDay.getFullYear().toString();

    // convert number to string
    const date = dateNumber.toString();
    const month = monthNumber.toString();

    // make query string
    const queryStr = `?startDate=${year}-${
      month.length === 1 ? "0" + month : month
    }-${date.length === 1 ? "0" + date : date}`;

    // asign query
    setQueryParam(queryStr);

    console.log(targetDay);
  };

  const items: MenuProps["items"] = [
    {
      key: "Daily",
      label: (
        <button
          onClick={() => timeHandler(1)}
          style={{ border: "0px", cursor: "pointer" }}
        >
          Daily
        </button>
      ),
    },
    {
      key: "Weekly",
      label: (
        <button
          onClick={() => timeHandler(7)}
          style={{ border: "0px", cursor: "pointer" }}
        >
          Weekly
        </button>
      ),
    },
    {
      key: "Monthly",
      label: (
        <button
          onClick={() => timeHandler(30)}
          style={{ border: "0px", cursor: "pointer" }}
        >
          Monthly
        </button>
      ),
    },
    {
      key: "Yearly",
      label: (
        <button
          onClick={() => timeHandler(365)}
          style={{ border: "0px", cursor: "pointer" }}
        >
          Yearly
        </button>
      ),
    },
  ];

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "48px 0px",
        }}
      >
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            Sales History
          </h1>
        </div>
        <div>
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Button style={{ fontSize: "18px", fontWeight: "bold" }}>
              Filter
            </Button>
          </Dropdown>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardFilter;
