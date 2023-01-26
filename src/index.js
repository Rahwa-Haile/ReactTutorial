import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    author: "by Prince Harry The Duke of Sussex and Random House Audio",
    title: "Spare",
    img: "https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL900_SR900,600_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  const clickHandler = () => {
    alert("Hello world");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h5>{author.toUpperCase()}</h5>
      <button onClick={clickHandler}>reference example</button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
