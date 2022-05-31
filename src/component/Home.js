import React from "react";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Datachart from "./DataChart";
import TicketSummery from './TicketSummery';
import Performance from "./Performance";

const Home = () => {
  let user = [];
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("https://conversecrm.cexlabapps.com/api/v1/user/profile?id=8")
      .then((resp) => {
        var getdata = resp.data.data;
        setdata(getdata);
        // const date=data.last_login;
        // // const newdate = new Date(date);
        // console.log(date.split('/'));
      }).catch((err)=>{
        alert( "Couldn't find User with 'id'=33");
      });
  }, []);

  return (
    <div className="container">
      <div className="box">
        <div className="box1">
          <div className="box-container">
            <p>Personal Information</p>
            <p className="icon-edit">
              <i className="fa fa-print" aria-hidden="true"></i>
            </p>
          </div>
          <hr />
          {
            <div className="info">
              <table className="heading">
                <tr>
                  <td>{data.fullname}</td>
                  <td style={{ fontSize: "12px" }}>Banglore</td>
                </tr>
              </table>
              <h6>contact information</h6>
              <div className="main-info">
                <table>
                  <tbody>
                    <tr>
                      <td>Phone :</td>
                      <td>{data.phone}</td>
                    </tr>
                    <tr>
                      <td>Business Phone :</td>
                      <td>{data.business_phone}</td>
                    </tr>
                    <tr>
                      <td>ID :</td>
                      <td>{data.id}</td>
                    </tr>
                    <tr>
                      <td>Role :</td>
                      <td>Agent</td>
                    </tr>
                    <tr>
                      <td>Last Login :</td>
                      <td>{data.last_login}</td>
                    </tr>
                    <tr>
                      <td>Department</td>
                      <td>{data.depts}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{data.email}</td>
                    </tr>
                    <tr>
                      <td>Birthday</td>
                      <td>June 10,1997</td>
                    </tr>
                    <tr>
                      <td>gender</td>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
          <hr />
          <div className="footer">
            <table>
              <tbody>
                <tr>
                  <td className="date">
                    <strong>Sunday</strong> <br /> <span>apr, 3-2022</span>{" "}
                    <br />
                    <span> 6.31pm</span>
                  </td>
                  <td className="achivement">
                    <div>
                      Today's Achievement <br />
                      40/60
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Interaction Summery</p>
        </div>
        <hr />
        <div className="chart">
          <Datachart/>
        </div>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Performance</p>
          <p className="icon-edit">
            <i className="fa fa-print" aria-hidden="true"></i>
          </p>
        </div>
        <hr />
        <Performance/>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Ticket Summerys</p>
          <p className="icon-edit">
            <i className="fa fa-print" aria-hidden="true"></i>
          </p>
        </div>
        <hr />
        <TicketSummery/>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Feed 1</p>
        </div>
        <hr />
        <div className="chart">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellat iusto, minus aut pariatur vitae at eaque sapiente repudiandae necessitatibus adipisci. Modi id iusto eos nam non debitis, eaque minus magnam animi nobis. Quo magnam aperiam delectus cupiditate rerum, totam quae optio minus molestias animi veritatis, debitis porro est beatae!</p>
        </div>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Feed 2</p>
        </div>
        <hr />
        <div className="chart">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellat iusto, minus aut pariatur vitae at eaque sapiente repudiandae necessitatibus adipisci. Modi id iusto eos nam non debitis, eaque minus magnam animi nobis. Quo magnam aperiam delectus cupiditate rerum, totam quae optio minus molestias animi veritatis, debitis porro est beatae!</p>
        </div>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Feed 3</p>
        </div>
        <hr />
        <div className="chart">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellat iusto, minus aut pariatur vitae at eaque sapiente repudiandae necessitatibus adipisci. Modi id iusto eos nam non debitis, eaque minus magnam animi nobis. Quo magnam aperiam delectus cupiditate rerum, totam quae optio minus molestias animi veritatis, debitis porro est beatae!</p>
        </div>
      </div>
      <div className="box">
        <div className="box-container">
          <p>Feed 4</p>
        </div>
        <hr />
        <div className="chart">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellat iusto, minus aut pariatur vitae at eaque sapiente repudiandae necessitatibus adipisci. Modi id iusto eos nam non debitis, eaque minus magnam animi nobis. Quo magnam aperiam delectus cupiditate rerum, totam quae optio minus molestias animi veritatis, debitis porro est beatae!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
