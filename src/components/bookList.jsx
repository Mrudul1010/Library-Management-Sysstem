import { useState,useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";

const BookList = () => {
    let[books,setBooks] =  useState([])
    useEffect(()=>{
        let fetchData = async() =>{
          let response = await fetch('http://localhost:2000/books')
          let data = await response.json()
          setBooks(data) //updating
          console.log(data)
        }
        fetchData()
    },[books])
    let handleDelete = (id,title) =>{
       fetch(`http://localhost:2000/books/${id}`,{                                     // setBooks( books.filter(x => x.id != id))
         method:'DELETE'                                                               // alert(`${title} has been removed`)
    });
    alert(`${title} will be deleted permanantly`)
}
let navigate = useNavigate()
let read = (id) => {
    navigate(`/admin/book-list/${id}`)
}

    return ( 
        <div className="bookList">
         <h1>Book List</h1>
         <h1>Book List: {books.length}</h1>
         <div className="books_section">
            { books.map( data => (
                <div className="book_card">
                    <div className="pic">
                        <img src={data.thumbnailUrl} alt="" />
                    </div>
                    <div className="others">
                   <h2>{data.title}</h2>
                   <h6>Authors:{data.authors}</h6>
                   <h6>Categories:{data.categories}</h6>
                   <h6>PageCount: {data.pageCount}</h6>
                   <button onClick={() => read(data.id)} className="btnread">Read more</button>
                   <button onClick={() => handleDelete(data.id,data.title) } className='btndanger'>Delete</button>
                   </div>
                </div>
            ) ) }
         </div>
        </div>
     );
}
 
export default BookList;