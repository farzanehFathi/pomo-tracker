import { useEffect, useState } from "react";
import "./LogData.css";

export default function LogData() {
  const [itemDate, setItemDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [itemDetail, setItemDetail] = useState("");
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("savdeFormData")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedFormData", JSON.stringify(savedData));
  }, [savedData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(new Date(itemDate));

    const newEntry = { formattedDate, itemName, itemCount, itemDetail };
    setSavedData([...savedData, newEntry]);
    setItemDate("");
    setItemName("");
    setItemCount("");
    setItemDetail("");
  };

  return (
    <div className="LogData">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="date"
          name="itemData"
          value={itemDate}
          id=""
          onChange={(e) => setItemDate(e.target.value)}
        />
        <select
          required
          name="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        >
          <option value="">Choose a pomo</option>
          <option value="🍅">🍅</option>
          <option value="🍋">🍋</option>
          <option value="🥦">🥦</option>
        </select>
        <input
          required
          type="number"
          name="itemCount"
          value={itemCount}
          placeholder="Enter Pomo number"
          onChange={(e) => setItemCount(e.target.value)}
        />
        <input
          required
          type="text"
          name="itemDetail"
          value={itemDetail}
          placeholder="Add description"
          onChange={(e) => setItemDetail(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="log-table">
        {savedData
          .slice()
          .reverse()
          .map((entry, index) => (
            <div className="log-table-row" key={index}>
              <div className="log-table-col">{entry.formattedDate}</div>
              <div className="log-table-col">{entry.itemName}</div>
              <div className="log-table-col">{entry.itemCount}</div>
              <div className="log-table-col">{entry.itemDetail}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
