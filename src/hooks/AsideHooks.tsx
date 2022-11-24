import React from "react";
import { Link } from "react-router-dom";

export function Aside() {
  return (
    <div className="aside">
      <div className="aside-item-one">
        <ul>
          {" "}
          <li>
            <svg
              width="16"
              height="7"
              viewBox="0 0 16 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 3H12V1.5C12 0.7 11.3 0 10.5 0H5.5C4.7 0 4 0.7 4 1.5V3H1.5C0.7 3 0 3.7 0 4.5V7H16V4.5C16 3.7 15.3 3 14.5 3ZM10 3H6V2H10V3Z"
                fill="#213F7D"
              />
            </svg>{" "}
            Switch Organization <button type="button">v</button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.33329 8.87747V6.22219C7.33329 6.10432 7.28647 5.99127 7.20312 5.90792C7.11977 5.82457 7.00672 5.77774 6.88885 5.77774H5.11107C4.9932 5.77774 4.88015 5.82457 4.7968 5.90792C4.71345 5.99127 4.66663 6.10432 4.66663 6.22219V8.8808C4.66663 8.99829 4.62011 9.111 4.53724 9.19429C4.45437 9.27757 4.34189 9.32466 4.2244 9.32524L1.11107 9.3333C0.993196 9.3333 0.88015 9.28648 0.796801 9.20313C0.713451 9.11978 0.666626 9.00673 0.666626 8.88886V4.33497L5.78857 0.116912C5.84877 0.0683907 5.92375 0.0419312 6.00107 0.0419312C6.07839 0.0419312 6.15337 0.0683907 6.21357 0.116912L11.3333 4.3333V8.88886C11.3333 9.00673 11.2865 9.11978 11.2031 9.20313C11.1198 9.28648 11.0067 9.3333 10.8888 9.3333L7.77774 9.32469C7.71914 9.32469 7.66112 9.3131 7.60701 9.29059C7.55291 9.26809 7.50379 9.2351 7.46248 9.19353C7.42117 9.15197 7.38849 9.10264 7.36632 9.0484C7.34415 8.99416 7.33293 8.93607 7.33329 8.87747Z"
                fill="#213F7D"
              />
            </svg>
            <div>
              <Link to="/dashboard" className="liitem">
                Dashboard
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="list-style-type">
          <li>
            <div>
              <Link to="#" className="liitem">
                Customer
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="userdetails" className="liitem">
                -Users
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="userdetails" className="liitem">
                -Guarantors
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="userdetails" className="liitem">
                -Loans
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Decision Model
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="userdetails" className="liitem">
                -Savings
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Loan Request
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Whitelist
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Karma
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                Business
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Organization
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Loan Product
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Savings Product
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Fee and Charges
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Transacions
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Services
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Service Account
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Settlements
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Reports
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                Settings
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                Preferences
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                Fees and Pricing
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#" className="liitem">
                -Audit Logs
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
