import React, { Component } from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

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
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${this.props.bookCover})`,
              }}
            ></div>
            <BookShelfChangerComponent />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthors}</div>
        </div>
      </li>
    );
  }
}

export default BookComponent;

/*
Promise { "fulfilled" }
​
<state>: "fulfilled"
​
<value>: (7) […]
​​
0: Object { title: "The Linux Command Line", subtitle: "A Complete Introduction", publisher: "No Starch Press", … }
​​
1: Object { title: "Learning Web Development with React and Bootstrap", publishedDate: "2016-12-30", description: "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.", … }
​​
2: Object { title: "The Cuckoo's Calling", publisher: "Mulholland Books", publishedDate: "2013-04-30", … }
​​
3: Object { title: "Lords of Finance", subtitle: "The Bankers Who Broke the World", publisher: "Penguin", … }
​​
4: Object { title: "Needful Things", publisher: "Simon and Schuster", publishedDate: "2016-05-03", … }
​​
5: Object { title: "React", subtitle: "Die praktische Einführung in React, React Router und Redux", publisher: "dpunkt.verlag", … }
​​
6: Object { title: "Satire TV", subtitle: "Politics and Comedy in the Post-Network Era", publisher: "NYU Press", … }
​​
length: 7
​​
<prototype>: Array []
​
<prototype>: PromiseProto { … }
App.js:9
Die Verbindung zu ws://localhost:3000/sockjs-node/570/lxfbvogv/websocket wurde unterbrochen, während die Seite geladen wurde. websocket.js:7
The development server has disconnected.
Refresh the page if necessary. webpackHotDevClient.js:65

*/
