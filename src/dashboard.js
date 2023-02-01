import React from "react";
import "./styles.css";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dashboard(props) {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const getUserList = () => {
    setLoading(true);
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10 "
      )
      .then((res) => {
        setUserList(res.data.data);
        setLoading(false);
      });
  };
  return (
    <div className="Active">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <button
        className="btn btn-info float-right"
        onClick={getUserList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get User List"}
      </button>
      <div className="clearfix"></div>

      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th style={{ color: "white" }}>Date</th>
            <th style={{ color: "white" }}>Day Installs</th>
            <th style={{ color: "white" }}>Platform</th>
            <th style={{ color: "white" }}>Day Uninstalls</th>
            <th style={{ color: "white" }}>Platform</th>
            <th style={{ color: "white" }}>Churn Rate</th>
            <th style={{ color: "white" }}>Churn Platform</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.day_installs}</td>
              <td>{item.platform}</td>
              <td>{item.day_uninstalls}</td>
              <td>{item.platform}</td>
              <td>{item.churn_rate}</td>
              <td>{item.churn_platform}</td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="9">
                <b style={{ color: "white" }}>No data found to display.</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
