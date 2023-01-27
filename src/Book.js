const Book = ({ img, author, title }) => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h5>{author.toUpperCase()}</h5>
      <button onClick={clickHandler}>reference example</button>
      <button onClick={() => complexExample(author)}>
        reference complex Example
      </button>
    </article>
  );
};

export default Book