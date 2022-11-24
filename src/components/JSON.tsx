import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function GetJson() {
  const [datas, setData] = useState([]);
  const location = useLocation();
  const getData = () => {
    if (
      location.pathname === "/dashboard"
    ) {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          // console.log(myJson);
          setData(myJson);
        });
    }
    if (location.pathname === "/user") {
      fetch("users.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          // console.log(myJson);
          setData(myJson);
        });
    }
  };
  useEffect(() => {
    getData();
  });
  return datas;
}
