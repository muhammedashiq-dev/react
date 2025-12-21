import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar  from '../Navbar';


function CreateBooks() {
    const [title,setTtile] = useState("");
    const[author,setAuhtor] = useState("");
    const[publishedYear,setPublishedYear] = useState("");
    const[genre,setGenre] = useState("");
    const navigate = useNavigate();

    function addPost() {
        axios.post('https://worksheet-library.mashupstack.com/books',{
            title : title,
            author : author,
            published_year : publishedYear,
            genre : genre
        }).then(response =>{
            navigate('/library/books')
        })
    }
    return(
        <div>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <h1 className='text-center'>Add Book</h1>
                        <div className='form-group'>
                            <label>Title</label>
                            <input type='text' className='form-control' value={title} onChange={e=>setTtile(e.target.value)}/>
                            <label>Author</label>
                            <input type='text' className='form-control' value={author} onChange={e=>setAuhtor(e.target.value)}/>
                            <label>Published Year</label>
                            <input type='text' className='form-control' value={publishedYear} onChange={e=>setPublishedYear(e.target.value)}/>
                            <label>Genre</label>
                            <input type='text' className='form-control' value={genre} onChange={e=>setGenre(e.target.value)}/>
                            <button type='button' className='btn btn-primary mt-3' onClick={addPost}>Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default CreateBooks;