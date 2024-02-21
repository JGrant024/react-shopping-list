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
          Add to the List 1
          <input
            type="text"
            name="firstGroceryItem"
            value={myList.firstGroceryItem}
            onChange={handleChange}
          />
        </label>
        <label>
          Add to the List2
          <input
            type="text"
            name="secondGroceryItem"
            value={myList.secondGroceryItem}
            onChange={handleChange}
          />
        </label>
        <label>
          Add to the List 3
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
