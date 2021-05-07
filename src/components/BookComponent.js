import React, { Component } from 'react'
import { BookShelfChangerComponent } from './BookShelfChangerComponent'

/* 
  TODO: 
  1. Get data for the books
*/

export class BookComponent extends Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
                        <BookShelfChangerComponent/>
                    </div>
                    <div className="book-title">The Hobbit</div>
                    <div className="book-authors">J.R.R. Tolkien</div>
                </div>
            </li>
        )
    }
}

export default BookComponent
