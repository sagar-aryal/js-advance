import FilterableProductTable from "./component-hierarchy/FilterableProductTable";

const App = () => {
  return (
    <>
      <FilterableProductTable />
    </>
  );
};

export default App;

/* 
import { useState } from "react";

import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevValue) => count + 1);
  };

  return (
    <>
      <MyButton count={count} handleClick={handleClick} />
      <Profile />
      <ShoppingList />
        <MyButton count={count} handleClick={handleClick} />
    </>
  );
};

export default App; 
*/
