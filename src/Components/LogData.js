import "./Components/LogData.css";

export default function LogData() {
  return (
    <div className="LogData">
      <form>
        <input type="datetime-local" name="date-time" id="date_time_id" />
        <input type="text" name="" id="" />
        <input type="number" name="" id="" />
        <input type="text" name="Description" id="" />
        <input type="submit" value="Add" />
      </form>

      <div className="log-table">
        <div className="log-table-row">
          <div className="log-table-col">5</div>
        </div>
      </div>
    </div>
  );
}
