import React, { useState } from "react";
import data from "./data";
import Reminder from "./Component/Reminder";

const App = () => {
  const [reminders, setReminders] = useState(data);
  return (
    <div>
      <h1>{reminders.length} Birthdays Today</h1>
      {reminders.map((d) => {
        return (
          <div>
            <Reminder key={d.id} data={d} />
          </div>
        );
      })}
      <button onClick={() => setReminders([])} className="btn btn-primary">
        Clear All
      </button>
    </div>
  );
};

export default App;
