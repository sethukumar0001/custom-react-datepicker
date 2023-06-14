import logo from "./logo.svg";
import "./App.css";
import { DatePickerComponent } from "./DatePicker";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <DatePickerComponent />
    </div>
  );
}

export default App;
