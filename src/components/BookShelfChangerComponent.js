import React, { useState } from "react";
/* 
  TODO: 
  - [ ] create moveTo(currentlyReading/wantToRead/read/none) function
*/
export const BookShelfChangerComponent = ({ id, shelf }) => {
  function handleMoveBook(book) {
    switch (book) {
      case "currentlyReading":
        console.log([id, shelf]);
        break;
      case "wantToRead":
        console.log([id, shelf]);
        break;
      case "read":
        console.log([id, shelf]);
        break;

      case "none":
        console.log([id, shelf]);
        break;

      default:
        console.log(book);
        break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        <option
          onClick={() => handleMoveBook([id, "currentlyReading"])}
          value="currentlyReading"
        >
          Currently Reading
        </option>
        <option
          onClick={() => handleMoveBook([id, "wantToRead"])}
          value="wantToRead"
        >
          Want to Read
        </option>
        <option 
          onClick={() => handleMoveBook([id, "read"])} 
          value="read">
          Read
        </option>
        <option 
          onClick={() => handleMoveBook([id, "none"])} 
          value="none">
          None
        </option>
      </select>
    </div>
  );
};

export default BookShelfChangerComponent;
