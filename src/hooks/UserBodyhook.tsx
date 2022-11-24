import React, { useEffect, useState } from "react";
import { ALLDATA} from "../pages/DashBoardPage";
import { Link } from "react-router-dom";

export const UserBody = () => {
  const [details, setDetails] = useState([]);
  const getDatas = () => {
    fetch("users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setDetails(myJson);
      });
  };
  useEffect(() => {
    getDatas();
  })
  return (
    <div className="body">
      <p>
        <Link to="/dashboard">Back to users</Link>
      </p>
      <div id="body">
        <div>User Details</div>
        <div id="but">
          <button type="button" id="buttn">
            BLACKLIST
          </button>
          <button type="button" id="butt">
            ACTIVATE
          </button>
        </div>
      </div>
      {details.map((detail: ALLDATA) => {
        return (
          <>
            <div className="total">
              <div className="total-div">
                <div className="total-div-picture">
                  <img src={detail.profile.avatar} alt="img" />
                </div>
                <div className="total-div-details">
                  <div>
                    <ul className="total-div-detail-list">
                      <li>
                        <h3>{`${detail.profile.firstName} ${detail.profile.lastName}`}</h3>
                      </li>
                      <li>Lgdhfjsfgsfgsfgs</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="total-div-detail-list">
                      <li>
                        <h4>User's Tier</h4>
                      </li>
                      <li>
                        <span>3stars</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="total-div-detail-list">
                      <li>
                        <h3>{`${detail.profile.currency}${detail.accountBalance}`}</h3>
                      </li>
                      <li>{detail.accountNumber}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="total-list">
                <ul className="total-list-ul">
                  <li>General Details</li>
                  <li>Documents</li>
                  <li>Bank Details</li>
                  <li>Loans</li>
                  <li>Savings</li>
                  <li>App and System</li>
                </ul>
              </div>
            </div>
            <div className="big-box-big">
              <div className="big-first">
                <div>
                  <p>
                    <h4>Personal Information</h4>
                  </p>
                </div>
                <div className="big-first-div">
                  <div>
                    <ul className="ulll">
                      <li>FULL NAME</li>
                      <li>{`${detail.profile.firstName} ${detail.profile.lastName}`}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>PHONE NUMBER</li>
                      <li>{ detail.phoneNumber}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>EMAIL ADDRESS</li>
                      <li>{ detail.email}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>BVN</li>
                      <li>{ detail.profile.bvn}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>GENDER</li>
                      <li>{ detail.profile.gender}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>MARITAL STATUS</li>
                      <li>{ detail.profile.status? detail.profile.status : "single" }</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>CHILDREN</li>
                      <li>{ detail.children}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>TYPE OF RESIDENCE</li>
                      <li>{ detail.orgName}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="big-first">
                <div>
                  <p>
                    <h4>Education and Employment</h4>
                  </p>
                </div>
                <div className="big-first-div">
                  <div>
                    <ul className="ulll">
                      <li>LEVEL OF EDUCATION</li>
                      <li>{detail.education.level}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>EMPLOYMENT STATUS</li>
                      <li>{detail.education.employmentStatus}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>SECTOR OF EMPLOYMENT</li>
                      <li>{detail.education.sector}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>DURATION OF EMPLOYMENT</li>
                      <li>{detail.education.duration}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>OFFICE EMAIL</li>
                      <li>{detail.education.officeEmail}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>MONTHLY INCOME</li>
                      <li>{detail.education.monthlyIncome}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>LOAN REPAYMENT</li>
                      <li>{detail.education.loanRepayment}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="big-first">
                <div>
                  <p>
                    <h4>Socials</h4>
                  </p>
                </div>
                <div className="big-first-div">
                  <div>
                    <ul className="ulll">
                      <li>INSTAGRAM</li>
                      <li>{detail.socials.instagram}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>FACEBOOK</li>
                      <li>{detail.socials.facebook}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>TWITTER</li>
                      <li>{detail.socials.twitter}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="big-first">
                <div>
                  <p>
                    <h4>Guarantor</h4>
                  </p>
                </div>
                <div className="big-first-div">
                  <div>
                    <ul className="ulll">
                      <li>FULLNAME</li>
                      <li>`${detail.guarantor.firstName} ${detail.guarantor.lastName}`</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>PHONE NUMBER</li>
                      <li>{detail.guarantor.phoneNumber}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>EMAIL ADDRESS</li>
                      <li>{detail.guarantor.address}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li>GENDER</li>
                      <li>{detail.guarantor.gender}</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="ulll">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
