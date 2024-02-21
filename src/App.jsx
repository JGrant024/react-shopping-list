import { useState } from "react";
// import ShoppingList from './components/ShoppingList';
import ShoppingForm from "./components/ShoppingForm";
import "./App.css";

function App() {
  const [shoppingListItems, setShoppingListItems] = useState("");

  const generateList = (listItems) => {
    setShoppingListItems(listItems);
  };

  return (
    <>
      <h1>Groceries Up For Grabs!</h1>
      <ShoppingForm generateList={generateList}></ShoppingForm>

    </>
  );
}

export default App;
