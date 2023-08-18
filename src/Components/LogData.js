import { useState } from "react";
import "./LogData.css";

export default function LogData() {
  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [itemDetail, setItemDetail] = useState("");
  const [submittedData, setSubmittedData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ itemDate, itemName, itemCount, itemDetail });
  };

  return (
    <div className="LogData">
      <form onSubmit={handleSubmit}>
        <label>Date </label>
        <input
          type="date"
          name="date"
          value={itemDate}
          id="date_time_id"
          onChange={(e) => setItemDate(e.target.value)}
        />

        <label>Item </label>
        <input
          type="text"
          name="item"
          value={itemName}
          id=""
          onChange={(e) => setItemName(e.target.value)}
        />

        <br />
        <label>Count </label>
        <input
          type="number"
          name="count"
          value={itemCount}
          id=""
          onChange={(e) => setItemCount(e.target.value)}
        />
        <label>Detail </label>
        <input
          type="text"
          name="detail"
          value={itemDetail}
          id=""
          onChange={(e) => setItemDetail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {submittedData && (
        <div className="log-table">
          <div className="log-table-row">
            <div className="log-table-col">{submittedData.itemDate}</div>
            <div className="log-table-col">{submittedData.itemName}</div>
            <div className="log-table-col">{submittedData.itemCount}</div>
            <div className="log-table-col">{submittedData.itemDetail}</div>
          </div>
        </div>
      )}
    </div>
  );
}
