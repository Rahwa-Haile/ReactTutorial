import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstJob = {
  author: "by Prince Harry The Duke of Sussex and Random House Audio",
  title: "Spare",
  img: "https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL480_FMwebp_QL65_.jpg"
};
const secondJob = {
  author: "Mark Manson",
  title: "The Subtle Art of Not Giving a F*ck",
  img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL900_SR900,600_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstJob.author}
        title={firstJob.title}
        img={firstJob.img}
      />
      <Book
        author={secondJob.author}
        title={secondJob.title}
        img={secondJob.img}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img
        src={props.img}
        alt=""
      />
      <h1>{props.title}</h1>
      <h5>{props.author.toUpperCase()}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
