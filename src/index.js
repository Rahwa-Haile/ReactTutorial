import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "by Prince Harry The Duke of Sussex and Random House Audio";
const Book = () => {
  const title = "Spare";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL480_FMwebp_QL65_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h5>{author}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
