import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//tuple
let role: [number, string] = [1, "admin"];
// it assigns type to every element in the array

let myObj: object = { name: "John", age: 30 };
//this sets a custom type
type person = { name: string; age: number };
//in order to make a partiular property optional, you can use the question mark
type newguy = {name: string, age?:number}

let anotherObj: person = { name: "John", age: 30 };
//to make something share multiple types, you can use the |
let multTypes: string | number = 20;
multTypes = 12
multTypes = 'akwj'

//to define a function type
let printName: Function;
// another way to define it and its parameters
let printerName: (name: string) => void;
//the void is the return type of the function

function App() {
  const [count, setCount] = useState(0);
  const myArray: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
