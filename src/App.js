import "./App.css";
import FunctionalComponent from "./Components/FunctionalComponent";
import { ClassComponent, ClassComponent1 } from "./Components/ClassComponent";
import Click from "./Components/click";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div>
      <h1>Hello World, my name is Gaurav</h1>;
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent />
      <ClassComponent1 />
      <Click />
      <Counter />
      <ParentComponent />
    </div>
  );
}

export default App;
