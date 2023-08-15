import { useState } from "react";
import "./LogData.css";

export default function LogData() {
  const [time, setTime] = useState(null);
  const [item, setItem] = useState(null);

  function handleChange(event) {
    console.log(event);
    // setTime(event.target().value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleChange();
    setItem("Apple");
  };

  return (
    <div className="LogData">
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          name="date-time"
          id="date_time_id"
          onChange={handleChange}
        />
        <input type="text" name="" id="" />
        <input type="number" name="" id="" />
        <input type="text" name="Description" id="" />
        <input type="submit" value="Add" />
      </form>

      <div className="log-table">
        <div className="log-table-row">
          <div className="log-table-col">{time}</div>
          <div className="log-table-col">{item}</div>
          <div className="log-table-col">5</div>
          <div className="log-table-col">5</div>
        </div>
      </div>
    </div>
  );
}
