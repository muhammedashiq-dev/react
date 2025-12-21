import React,{useState} from "react";
import Navbar from "../Navbar";

function Book() {
    const [bookName,setBookName] = useState("");
    const [authorName,setAuthorName] =  useState("");
    const [publishDate,setPublishDate] = useState("");
    const [books,setBooks] = useState([
  { id: 1, bookname: "Clean Code", authorname: "Robert C. Martin", publishdate: "2008-08-01" },
  { id: 2, bookname: "The Pragmatic Programmer", authorname: "Andrew Hunt", publishdate: "1999-10-20" },
  { id: 3, bookname: "You Don’t Know JS", authorname: "Kyle Simpson", publishdate: "2015-12-27" },
  { id: 4, bookname: "Introduction to Algorithms", authorname: "Thomas H. Cormen", publishdate: "2009-07-31" },
  { id: 5, bookname: "Design Patterns", authorname: "Erich Gamma", publishdate: "1994-10-21" }
]
);
    const [editBook,setEditBook] =  useState("");
    const [editId,setEditId] = useState(null);
    const [searchTerm,setSearchTerm] =  useState("");

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

const handleSearchBook = (event) => {
    event.preventDefault();
    const updatedBook = books.filter((book)=>
    book.bookname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(updatedBook);
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
                    <form onSubmit={handleSearchBook}>
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Book;