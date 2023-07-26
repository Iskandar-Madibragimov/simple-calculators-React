import logo from './logo.svg';
import './App.css';
import BMI from "./components/bmi"
import Hypotonuse from "./components/hypotonuse"
import Converter from "./components/tempconverter"

function App() {
  return (
    <body>
      <Hypotonuse />
      <BMI />
      <Converter />
    </body>
  );
}

export default App;
