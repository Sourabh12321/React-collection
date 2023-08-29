import jsondata from "../nonfiction.json"


export default function NonFiction() {

  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>NonFictional books</h1>

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
