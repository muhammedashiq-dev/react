import React,{useState} from "react";
import Navbar from "../Navbar";

function Book() {
    const [bookName,setBookName] = useState("");
    const [authorName,setAuthorName] =  useState("");
    const [publishDate,setPublishDate] = useState("");
    const [books,setBooks] = useState([]);
    const [editBook,setEditBook] =  useState("");
    const [editId,setEditId] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        var x = books.length +1;
        const newBook = {
            id : x,
            bookname : bookName,
            authorname : authorName,
            publishdate : publishDate,
        }
        setBooks([...books,newBook]);
        setAuthorName("");
        setBookName("");
        setPublishDate("");
    }

    const handleEditBook = (book) => {
        setEditBook(book.bookname);
        setEditId(book.id);
}

const handleSaveEdit = () => {
    if (editBook.trim() !== "") {
        const updatedBook = books.map((book)=>{
            if(book.id === editId) {
                return {...book,bookname:editBook};
            }
            return book;
        });
        setBooks(updatedBook);
        setEditId(null);
    }
}

const cancelEdit = () => {
    setEditBook("");
    setEditId(null);
}

const handleDelete = (id) => {
 const filteredBook = books.filter((book) => book.id !== id);
 setBooks(filteredBook);
}

    return(
        <div>
        <Navbar/>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>Enter bookname</label>
                <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}/>
                <label>Enter Authorname</label>
                <input type="text" value={authorName} onChange={(e)=> setAuthorName(e.target.value)}/>
                <label>Enter Date</label>
                <input type="date" value={publishDate} onChange={(e) =>  setPublishDate(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
            <div className="row">
                <div className="col-1"></div>
                <div className="col mt-4">
                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>bookname</th>
                                <th>authorname</th>
                                <th>publishdate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No Books Found
                                    </td>
                                </tr> 
                            ) : (
                         books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                            <td>
                            {editId === book.id? (
                                <input type="text" value={editBook} onChange={(e) => setEditBook(e.target.value)}/>
                            ) : (
                                book.bookname)}
                                </td>
                                <td>{book.authorname}</td>
                                <td>{book.publishdate}</td>
                                <td>
                                    {editId === book.id ? (
                                        <>
                                        <button className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
                                        <button className="btn btn-secondary" onClick={cancelEdit}>Cancel</button>
                                        </>
                                    ):(
                                        <>
                                        <button  className="btn btn-primary" onClick={() => handleEditBook(book)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                         )))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Book;