import "./App.css";
import Employee from "./components/Employee";

function App(){
  return(
    <div>
    <h1>Employee Profile Cards</h1>
    <Employee name="Ramesh" id="EMP101" dep = "AIML" Desig = "Assistant Professor" sal = "₹55,000" />
    <Employee name="Kavya" id="EMP102" dep = "CSE" Desig = "Assistant Professor" sal = "₹62,000" />
    <Employee name="Neha" id="EMP103" dep = "CSM" Desig = "Assistant Professor" sal = "₹65,000" />
    <Employee name="Samvida" id="EMP104" dep = "CSD" Desig = "Assistant Professor" sal = "₹72,000" />
    </div>
  );
}

export default App;