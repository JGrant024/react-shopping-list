import { useState } from "react";

const ShoppingForm = ({ generateList }) => {
  const [myList, setMylist] = useState({
    firstGroceryItem: "",
  });

  const handleChange = (e) => {
    setMylist((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(generateList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Add to the List
          <input
            type="text"
            name="firstGroceryItem"
            value={myList.firstGroceryItem}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Grocery Submission </button>
      </form>
    </>
  );
};

export default ShoppingForm;
