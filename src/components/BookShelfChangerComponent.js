import React, { Component } from "react";
/* 
  TODO: 
  - [ ] create moveTo(currentlyReading/wantToRead/read/none) function
*/
export class BookShelfChangerComponent extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChangerComponent;
