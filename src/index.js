import React from 'react'
import ReactDOM  from 'react-dom'

function BookList(){
  return (
    <section>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
  )
}

const Book = ()=>{
    return (
      <article>
        <Image />
        <Title></Title>
        <Author/>
      </article>
    );
}

const Image = ()=>{
  return (
    <img src="https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
  )
}
const Title = ()=>{
  return (
    <div>
      <h1>Spare</h1>
    </div>
  )
}
const Author = ()=>{
  return (
    <div>
      <h5>by Prince Harry The Duke of Sussex and Random House Audio</h5>
    </div>
  );
}


ReactDOM.render(<BookList/>, document.getElementById('root'))