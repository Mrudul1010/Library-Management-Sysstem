import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'
const Addbook = () => {
    let[title,setTitle] = useState("")
    let[categories,setCategories] = useState("")
    let[authors,setAuthors] = useState("")
    let[pageCount,setPage] = useState("")
    let[shortDescription,setShort] = useState("")
    let[longDescription,setLong] = useState("")
    let[thumbnailUrl,setthumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault() 
        //data to be posted
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
        fetch(`http://localhost:2000/books`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert(`${title} is added`)
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form action="">
                    <div className="title"></div>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title of the book" />
                    <div className="authors"></div>
                    <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" placeholder="Name of the authors" />
                    <div className="categories"></div>
                    <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" placeholder="Enter categories" />
                    <div className="pageCount"></div>
                    <input value={pageCount} onChange={(e)=>setPage(e.target.value)} type="number" placeholder="Enter page count" />
                    <div className="shortDescription"></div>
                    <textarea value={shortDescription} onChange={(e)=>setShort(e.target.value)} name="" id="" cols="50" rows="9" placeholder="shortDesc"></textarea>
                    <div className="longDescription"></div>
                    <textarea value={longDescription} onChange={(e)=>setLong(e.target.value)} name="0" id="" cols="70" rows="10" placeholder="LongDesc"></textarea>
                    <div className="thumbnailUrl"></div>
                    <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" placeholder="thumbnail URL" />
                    <button>Add Book</button>
                </form>

            </div>
        </div>
     );
}
 
export default Addbook;