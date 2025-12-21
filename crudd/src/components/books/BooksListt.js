import axios from 'axios';
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import ListBooks from './ListBooks';

function BooksListt() {
    var [books,setBooks] = useState([]);
    function fetchPosts(){
        axios.get('https://worksheet-library.mashupstack.com/books').then(response =>{
            setBooks(response.data)
        })
    }
    console.log(books);
    useEffect(()=>{
        fetchPosts()
    },[])
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center my-4'>Books</h1> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <Link to="/library/books/create" className='btn btn-primary' mb-2>Add Book</Link>
                        {books.map(book => <ListBooks key={book.id} book= {book} refresh={fetchPosts}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BooksListt;
