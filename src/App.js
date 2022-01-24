import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Meals from "./Components/Meals/Meals";

function App() {
  const [totalItem, setTotalItem] = useState(0);
  //this is a comment
  function submitHandler(itemQnt) {
    setTotalItem(itemQnt);
  }

  if (totalItem > 0) {
    console.log(totalItem);
  }
  return (
    <React.Fragment>
      <Header itemQunt={totalItem}></Header>
      <Banner></Banner>
      <Meals onSubmit={submitHandler}></Meals>
    </React.Fragment>
  );
}

export default App;
