import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DATA } from "../pages/DashBoardPage";

export function Header() {
  const [dbb, setDbb] = useState([]);
  const [search, setSearch] = useState("");
  let newDbb: string[] | null | undefined = [];
  const navigate = useNavigate();

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
        setDbb(myJson);
      });
  };

  const onChangeSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };
  const handleSearch = () => {
    let filters = { search };
    let newData: string | null | undefined | never;

    dbb?.filter((item:DATA) => {
      if (filters.search === item.orgName) {
        newData = JSON.stringify(item);
      }
      if (newData && newDbb) {
        newDbb.push(newData);
      }
      if (newDbb !== null && newDbb !== undefined) {
        return navigate("/user");
      }
      return (
        <div>
          <h2>No user found</h2>
        </div>
      );
    });
  };

  useEffect(() => {
    setData();
  });
  return (
    <div className="headers">
      <div className="header-first" id="item-list">
        {" "}
        <span>
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1.66541C0 1.11304 0.443238 0.665253 0.99 0.665253H3.96C4.50676 0.665253 4.95 1.11304 4.95 1.66541V19.6682C4.95 20.2206 5.39324 20.6684 5.94 20.6684H18.81C19.3568 20.6684 19.8 20.2206 19.8 19.6682V16.6678C19.8 16.1154 19.3568 15.6676 18.81 15.6676H12.87C11.2297 15.6676 9.9 14.3243 9.9 12.6671V3.66573C9.9 2.00861 11.2297 0.665253 12.87 0.665253H21.78C23.4203 0.665253 24.75 2.00861 24.75 3.66573V22.6687C24.75 24.3258 23.4203 25.6692 21.78 25.6692H2.97C1.32971 25.6692 0 24.3258 0 22.6687V1.66541ZM19.8 6.6662C19.8 6.11383 19.3568 5.66604 18.81 5.66604H14.85V9.66667C14.85 10.219 15.2932 10.6668 15.84 10.6668H19.8V6.6662Z"
              fill="url(#paint0_linear_6819_58336)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6819_58336"
                x1="-1.87183e-06"
                y1="37.9211"
                x2="26.2531"
                y2="-5.22382"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#213F7D" />
                <stop offset="1" stopColor="#39CDCC" />
              </linearGradient>
            </defs>
          </svg>
          lendSQR
        </span>
      </div>
      <div id="header-btn">
        <input
          type="search"
          name="search"
          value={search}
          id="search"
          placeholder="Search for Organization"
          onChange={onChangeSearch}
        />
        <button type="button" onClick={handleSearch}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.2"
              x="0.5"
              y="0.5"
              width="30"
              height="30"
              rx="7.5"
              fill="black"
              stroke="#213F7D"
            />
          </svg>
        </button>
      </div>
      <div className="headers-second">
        <ul className="header-second">
          <li>
            <Link to="/documentation">Docs</Link>
          </li>
          <li>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7001 12.6913C17.718 15.5178 18.8518 18.2235 20.8584 20.2183C21.0327 20.3912 21.0856 20.6531 20.9916 20.8804L20.9912 20.8815C20.8964 21.107 20.676 21.2561 20.4284 21.2549M17.7001 12.6913L20.429 21.0549M17.7001 12.6913V12.5968V10.6642C17.7176 9.12752 17.2154 7.63071 16.275 6.41524C15.3984 5.28217 14.1892 4.45625 12.821 4.05095C13.2642 3.42355 13.3572 2.60324 13.0487 1.88438L13.0486 1.88426C12.6962 1.06444 11.8907 0.53333 10.9982 0.53333C10.1057 0.53333 9.30018 1.06444 8.94771 1.88426L8.94766 1.88438C8.63969 2.60199 8.73182 3.42065 9.17296 4.04761C7.82501 4.42985 6.62769 5.22584 5.75338 6.32787C4.81219 7.51196 4.30025 8.97972 4.30025 10.4925L4.30025 12.5968L4.30025 12.5973C4.30723 15.4578 3.17063 18.2015 1.14175 20.2183C0.967488 20.3912 0.914595 20.6531 1.00854 20.8804L1.00898 20.8814C1.10373 21.107 1.32419 21.2561 1.57172 21.2549M17.7001 12.6913L8.02208 21.2549M20.4284 21.2549C20.4282 21.2549 20.428 21.2549 20.4278 21.2549L20.429 21.0549M20.4284 21.2549H20.429V21.0549M20.4284 21.2549H13.9781M20.429 21.0549H13.8112M13.9781 21.2549C13.9899 21.1989 14.0002 21.1422 14.0089 21.085L13.8112 21.0549M13.9781 21.2549C13.6832 22.6549 12.4456 23.67 11.0001 23.67C9.55459 23.67 8.31709 22.6549 8.02208 21.2549M13.9781 21.2549H13.8112V21.0549M13.8112 21.0549L8.02208 21.2549M8.02208 21.2549H8.18896V21.0549L7.99125 21.0851C7.99999 21.1423 8.01028 21.1989 8.02208 21.2549ZM8.02208 21.2549H1.57172M1.57172 21.2549C1.57195 21.2549 1.57218 21.2549 1.57241 21.2549L1.57118 21.0549V21.2549H1.57172ZM12.7285 21.2549C12.4747 21.9799 11.7867 22.4798 11.0001 22.4798H11C10.2133 22.4798 9.52539 21.9799 9.27157 21.2549H12.7285ZM5.51233 10.4924L5.51233 10.4921C5.51037 8.98893 6.12478 7.55137 7.21241 6.51489L7.21249 6.51481C8.2998 5.47745 9.76426 4.93259 11.2651 5.00474C12.6959 5.09328 14.0376 5.73143 15.0099 6.78408L15.0099 6.78409C15.9834 7.83803 16.5119 9.2253 16.4874 10.6596L16.4873 10.6596V10.663L16.4873 12.5961C16.4873 12.5962 16.4873 12.5963 16.4873 12.5964C16.4786 15.3045 17.3944 17.9297 19.0743 20.0424H2.92542C4.60545 17.9296 5.52131 15.3045 5.51233 12.5964L5.51233 10.4924ZM11.0001 1.75485C11.4119 1.75485 11.7837 2.00277 11.9416 2.38396C12.0986 2.76431 12.012 3.20235 11.7209 3.49448C11.4287 3.7856 10.9906 3.87214 10.6103 3.71506C10.2292 3.5571 9.98134 3.1853 9.98134 2.7736C9.98134 2.21071 10.4372 1.75485 11.0001 1.75485Z"
                fill="#213F7D"
                stroke="#213F7D"
                stroke-width="0.4"
              />
            </svg>
          </li>
          <li>
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
              alt="pic"
            />
          </li>
          <li>Tolulope</li>
          <li>
            <select name="name" id="select">
              <option>t</option>
              <option>g</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}
