//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const clickHandler = (event: MouseEvent) => console.log(event);

  //wrap code in {} to change dynamically, react needs unique key to keep track of items
  //

  //const clickHandler = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}

        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// export default ListGroup;

function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<string[]>([
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ]);
  const [newBookmark, setNewBookmark] = useState("");

  const addBookmark = () => {
    if (newBookmark.trim() !== "") {
      // Prevent adding empty bookmarks
      setBookmarks([...bookmarks, newBookmark]);
      setNewBookmark(""); // Clear the input field
    }
  };

  const deleteBookmark = (index: number) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Bookmark Locations</h1>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={newBookmark}
          onChange={(e) => setNewBookmark(e.target.value)}
          placeholder="Enter new location"
        />
        <button onClick={addBookmark}>Add</button>
      </div>

      <ul className="list-group">
        {bookmarks.map((bookmark, index) => (
          <li className="list-group-item" key={index}>
            {bookmark}
            <button onClick={() => deleteBookmark(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;
