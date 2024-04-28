import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const WebHeader = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    setTab(location?.pathname);
  }, []);

  const navigateOptions = [
    {
      label: "Orders",
      value: "/all/orders",
    },
    {
      label: "Complaints",
      value: "/all/complaints",
    },
    {
      label: "Payments",
      value: "/all/payments",
    },
  ];

  const handleChange = (e) => {
    navigate(e.value);
    setTab(e.value);
  };

  return (
    <Select
      options={navigateOptions}
      className={styles.select_flex}
      onChange={handleChange}
      value={navigateOptions?.filter((item) => item?.value === tab)}
    />
  );
};

export default WebHeader;
