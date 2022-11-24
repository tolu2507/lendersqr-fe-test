import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALLDATA, DATA } from "../pages/DashBoardPage";

interface FILTER {
  org: string;
  username: string;
  date: string;
  number: string;
}

export function Filter() {
  const [organization, setOrganization] = useState([]);
  let newDb: string[] | null | undefined = [];
  const [org, setOrg] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const getData = () => {
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
        setOrganization(myJson);
      });
  };
  const setData = () => {
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
        newDb = myJson;
      });
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOrg(e.target.value);
  };

  const handleReset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOrg("");
    setDate("");
    setUsername("");
    setNumber("");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const filter: FILTER = {
      org,
      username,
      date,
      number,
    };
    let newData: string | null | undefined | never;
    organization.filter((item: DATA) => {
      if (
        item.orgName === filter.org &&
        item.userName === filter.username &&
        item.createdAt?.toString().slice(0, 10) !== filter.date &&
        item.phoneNumber === filter.number
      ) {
        // let setDb = {
        //   id: item.id,
        //   orgName: item.orgName,
        //   userName: item.userName,
        //   email: item.email,
        //   phoneNumber: item.phoneNumber,
        //   createdAt: item.createdAt,
        // };
        newData = JSON.stringify(item);
        if (
          newData !== null &&
          newData !== undefined &&
          newDb !== null &&
          newDb !== undefined
        ) {
          newDb.push(newData);
          console.log(newDb);
        }
      }
      if (newDb !== null && newDb !== undefined) {
        return navigate("/user");
      }
      return { msg: "no user found" };
    });
  };

  useEffect(() => {
    getData();
    setData();
  });
  return (
    <form onSubmit={handleSubmit}>
      <ul className="form-ul">
        <li>
          Organization
          <select value={org} onChange={handleChange}>
            {organization.map((option: ALLDATA) => (
              <option key={option.id} value={option.orgName}>
                {option.orgName}
              </option>
            ))}
          </select>
        </li>
        <li>
          Username
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </li>
        <li>
          Date
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </li>
        <li>
          Phone Number
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Phone-Number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </li>
        <li className="form-ul-button">
          <button type="submit">Filter</button>

          <button type="reset" onClick={handleReset} id="reset">
            Reset
          </button>
        </li>
      </ul>
    </form>
  );
}
