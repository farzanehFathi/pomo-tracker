import { useState } from "react";
import "./LogData.css";

export default function LogData() {
  const [itemName, setItemName] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [itemDetail, setItemDetail] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const dataToSave = JSON.stringify(submittedData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { itemDate, itemName, itemCount, itemDetail };
    setSubmittedData([...submittedData, newEntry]);
    setItemName("");
    setItemDate("");
    setItemCount("");
    setItemDetail("");
  };

  return (
    <div className="LogData">
      <form onSubmit={handleSubmit}>
        <label>Date </label>
        <input
          required
          type="date"
          name="date"
          value={itemDate}
          id="date_time_id"
          onChange={(e) => setItemDate(e.target.value)}
        />

        <label>Select Item </label>
        <select
          required
          value={itemName}
          id=""
          onChange={(e) => setItemName(e.target.value)}
        >
          {" "}
          <option value="🍅">🍅</option>
          <option value="🍋">🍋</option>
          <option value="🥦">🥦</option>
          <option value="🍉">🍉</option>
          <option value="🍇">🍇</option>
        </select>

        <br />
        <label>Count </label>
        <input
          required
          type="number"
          name="count"
          value={itemCount}
          id=""
          onChange={(e) => setItemCount(e.target.value)}
        />
        <label>Detail </label>
        <input
          required
          type="text"
          name="detail"
          value={itemDetail}
          id=""
          onChange={(e) => setItemDetail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="log-table">
        {submittedData.map((entry, index) => (
          <div className="log-table-row" key={index}>
            <div className="log-table-col">{entry.itemDate}</div>
            <div className="log-table-col">{entry.itemName}</div>
            <div className="log-table-col">{entry.itemCount}</div>
            <div className="log-table-col">{entry.itemDetail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
