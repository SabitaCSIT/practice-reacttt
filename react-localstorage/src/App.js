import React ,{useState, useEffect} from 'react'
import './App.css';
import View from './components/View';

const getDataFromLS=()=>{
  const data= localStorage.getItem("books");
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {

  const [books,setBooks]=useState(getDataFromLS)
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [isbn,setIsbn]=useState('')

  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books))
  },[books])

  const handleAddBookSubmit = (e)=>{
    e.preventDefault();
    let book ={
      title,
      author,
      isbn
    }
    setBooks([...books,book]);
    setTitle('');
    setAuthor('');
    setIsbn('')
  }

  const deleteBook =(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn!==isbn
    })
    setBooks(filteredBooks)
  }

  return (
    <div className="App">
      <h1>BookList App</h1>
      <p>add and view your books using local storage</p>
      <div>
        <form onSubmit={handleAddBookSubmit}>
          <label>Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/>
          <label>Author</label>
          <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} required/><br/>
          <label>ISBN#</label>
          <input type="text" value={isbn} onChange={(e)=>setIsbn(e.target.value)} required/><br/>
          <button>Submit</button>
        </form>
      </div>

      <div>
        {books.length>0&&<>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ISBN#</th>
                  <th>Title#</th>
                  <th>Author#</th>
                  <th>Delete#</th>
                </tr>
              </thead>
              <tbody>
                <View books={books} deleteBook={deleteBook} />
              </tbody>
            </table>
          </div>
          <button onClick={()=>setBooks([])}>Remove All</button>
        </>}
      </div>

      <div>
        {books.length<1&&<div>No books are added yet</div>}
      </div>

    </div>
  );
}

export default App;
