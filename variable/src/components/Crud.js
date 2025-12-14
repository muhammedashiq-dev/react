import React, {useState} from 'react';

function Crud() {
    const [books,setBooks] = useState([
         { id: 1, name: "The Alchemist", author: "Paulo Coelho", date: "1988-05-01" },
         { id: 2, name: "Atomic Habits", author: "James Clear", date: "2018-10-16" },
    ])

    const [bookName,setBookName] = useState('');
    const [authorName,setAuthorName] = useState('');
    const [publishDate,setPublishDate] = useState('');
    const [searchTerm,setSearchTerm] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        if (bookName === "") return;
        var x = books.length + 1;
        const NewBook = {
            id : x,
            name : bookName,
            author : authorName,
            date : publishDate,
        };
        setBooks([...books,NewBook]);
        setAuthorName('');
        setBookName('');
        setPublishDate('');
    }

    const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
        <div>
            <div className='constainer mt-3'>
                <h2>Book List Management</h2>
                <form onSubmit={handleSubmit}>
                    <label>Book Name:</label>
                    <input type='text' value={bookName} onChange={(e) => setBookName(e.target.value)}/><br/>
                    <label>Author:</label>
                    <input type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)}/><br/>
                    <label>Publish Date:</label>
                    <input type='text' value={publishDate} onChange={(e) => setPublishDate(e.target.value)}/><br/>
                    <button className='btn btn-primary btn-sm' type='submit'>Add Book</button>
                </form>
                <div>
                    <label>Search:</label>
                    <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <br/>
                </div>
                <table className='table table-bordered table-dark'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th> Book Name</th>
                            <th>Author Name</th>
                            <th>Publish Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.length === 0 ?(
                        <tr>
                            <td colSpan="5" className='text-center'>No books found</td>
                        </tr>
                        ):(
                        filteredBooks.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.date}</td>
                                <td>
                                    <button>edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                       ) ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Crud;