import React, { useState } from "react";
import { ALLDATA, DATA } from "../pages/DashBoardPage";
import { Filter } from "../components/filter";
import { GetJson } from "../components/JSON";
import { Link, useLocation } from "react-router-dom";
import { Action } from "../components/action";

export const Body = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const locate = location.pathname;
  let datas = GetJson()

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    setHide(!hide);
  }
  function handleClickAction(e: { preventDefault: () => void }) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <div className="body">
      <div id="body">Users</div>
      <div className="total-boxes">
        <div className="boxes">
          <ul className="box">
            <li>
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
                alt="pic"
              />
            </li>
            <li>USERS</li>
            <li>{datas.length}</li>
          </ul>
        </div>
        <div className="boxes">
          <ul className="box">
            <li>
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
                alt="pic"
              />
            </li>
            <li>ACTIVE USERS</li>
            <li>{datas.length}</li>
          </ul>
        </div>
        <div className="boxes">
          {" "}
          <ul className="box">
            <li>
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
                alt="pic"
              />
            </li>
            <li>USERS WITH LOAN</li>
            <li>
              {datas.reduce((a: number, c: ALLDATA): number => {
                a += +c.education.loanRepayment;
                return Math.round(a);
              }, 0)}
            </li>
          </ul>
        </div>
        <div className="boxes">
          {" "}
          <ul className="box">
            <li>
              <img
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
                alt="pic"
              />
            </li>
            <li>USERS WITH SAVING</li>
            <li>102345</li>
          </ul>
        </div>
      </div>
      {locate === "/dashboard" || locate === "/user" ? (
        <div className="big-box-big">
          <div className="filter" style={{ display: hide ? "block" : "none" }}>
            <div>
              <button type="button" onClick={handleClick}>
                X
              </button>
            </div>
            <Filter />
          </div>
          <div className="big-box">
            <table>
              <thead>
                <tr>
                  <th>
                    ORGANIZATION{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    USERNAME{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    EMAIL{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    PHONE_NUM{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    DATE JOINED{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    STATUS{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="table-hide"
                  style={{ display: show ? "flex" : "none" }}
                >
                  <Action />
                </tr>
                {datas.map((data: DATA) => {
                  return (
                    <tr key={data.id}>
                      <td>
                        <Link to="userdetails">{data.orgName}</Link>
                      </td>
                      <td>
                        <Link to="userdetails">{data.userName}</Link>
                      </td>
                      <td>
                        <Link to="userdetails">{data.email}</Link>
                      </td>
                      <td>
                        <Link to="userdetails">{data.phoneNumber}</Link>
                      </td>
                      <td>
                        <Link to="userdetails">
                          {data.createdAt?.toString().slice(0, 10)}
                        </Link>
                      </td>
                      <td>
                        <Link to="userdetails">{data.id}</Link>
                      </td>
                      <td>
                        <button type="button" onClick={handleClickAction}>
                          :
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="big-box-big">
          <div className="big-box">
            <table>
              <thead>
                <tr>
                  <th>
                    ORGANIZATION{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    USERNAME{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    EMAIL{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    PHONE_NUM{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    DATE JOINED{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                  <th>
                    STATUS{" "}
                    <button type="button" onClick={handleClick}>
                      =
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <div className="hide">
                  <Action />
                </div>
                {datas.map((data: DATA) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.orgName}</td>
                      <td>{data.userName}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.createdAt?.toString().slice(0, 10)}</td>
                      <td>{"true"}</td>
                      <td>
                        <button type="button">:</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="least">
        <div className="last">
          {" "}
          <div>Showing</div>
          <div>1</div>
          <div>out of {datas.length}</div>
        </div>
        <div className="least-last">
          {" "}
          <div>
            <button type="button">-</button>
          </div>
          <div className="last-least">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>...</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
          <div>
            <button type="button">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};
