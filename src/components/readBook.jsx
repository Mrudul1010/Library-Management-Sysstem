import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    let[book,setBook] = useState([])
    let params = useParams()
    useEffect( () =>{
        let fetchData = async() =>{
        let response = await fetch(`http://localhost:2000/books/${params.id}`)
        let data = await response.json()
        setBook(data)
        }
        fetchData()
    } )
    return ( 
        <div>
           <h1>Read Book</h1> 
           <h2>{book.title}</h2>
           <p>{book.shortDescription}</p>
           <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;