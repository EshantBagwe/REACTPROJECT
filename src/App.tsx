import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { ProductTable } from "./components/ProductTable/ProductTable";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  console.log("SEARCH TEXT- ", searchText);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <FormComponent formText={searchText} onTextChange={setSearchText} />
        <br />
        <ProductTable filterText = {searchText}/>
      </header>
    </div>
  );
}

export default App;
