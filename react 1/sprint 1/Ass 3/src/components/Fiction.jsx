import jsondata from "../fiction.json"

export default function Fiction() {
  
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional books</h1>
      <div className="books-container">
        {jsondata.map((el,i)=>{
          return <div key={i}>
            <img src={el.img} alt="" />
            <h2>{el.title}</h2>
            <p>{el.author}</p>
            <p>{el.price}</p>
            <p>{el.year}</p>
          </div>
        })}
      </div>
    </div>
  );
}
