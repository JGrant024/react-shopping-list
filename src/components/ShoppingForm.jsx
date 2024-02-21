import { useState } from "react";

const ShoppingForm = ({ generateList }) => {
  const [myList, setMylist] = useState({
    firstGroceryItem: "",
    secondGroceryItem: "",
    thirdGroceryItem: "",
  });

  const handleChange = (e) => {
    setMylist((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateList(myList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          1st Grocery item
          <input
            type="text"
            name="firstGroceryItem"
            value={myList.firstGroceryItem}
            onChange={handleChange}
          />
        </label>
        <label>
          2nd Grocery item
          <input
            type="text"
            name="secondGroceryItem"
            value={myList.secondGroceryItem}
            onChange={handleChange}
          />
        </label>
        <label>
          3rd Grocery item
          <input
            type="text"
            name="thirdGroceryItem"
            value={myList.thirdGroceryItem}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Make My List </button>
      </form>
    </>
  );
};

export default ShoppingForm;
