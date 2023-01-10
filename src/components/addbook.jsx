import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addbook = () => {
    let[title,setTitle] = useState("")
    let[categories,setCategories] = useState("")
    let[authors,setAuthors] = useState("")
    let[page,setPage] = useState("")
    let[short,setShort] = useState("")
    let[long,setLong] = useState("")
    let[thumbnailUrl,setthumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault() 
        //data to be posted
        let bookData = {title,categories,authors,page,short,long,thumbnailUrl}
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
                    <input value={page} onChange={(e)=>setPage(e.target.value)} type="number" placeholder="Enter page count" />
                    <div className="shortDescription"></div>
                    <textarea value={short} onChange={(e)=>setShort(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    <div className="longDescription"></div>
                    <textarea value={long} onChange={(e)=>setLong(e.target.value)} name="0" id="" cols="30" rows="10"></textarea>
                    <div className="thumbnailUrl"></div>
                    <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" />
                    <button>Add Book</button>
                </form>

            </div>
        </div>
     );
}
 
export default Addbook;