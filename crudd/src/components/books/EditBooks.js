import axios from 'axios';
import { useEffect,useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import Navbar from '../Navbar';

function EditBooks() {
    const {bookId} = useParams();
    const[title,setTitle] = useState("");
    const[author,setAuhtor] = useState("");
    const[publishedYear,setPublishedYear] = useState("");
    const[genre,setGenre] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://worksheet-library.mashupstack.com/books/'+bookId).then(response =>{
            setTitle(response.data.title);
            setAuhtor(response.data.author);
            setPublishedYear(response.data.published_year);
            setGenre(response.data.genre)
        })
    },[bookId]);
    
    function updatePost(){
        axios.put('https://worksheet-library.mashupstack.com/books/'+bookId,{
            title : title,
            author : author,
            published_year : publishedYear,
            genre : genre
        }).then(response => {
            alert(response.data.message);
             navigate('/library/books');
        })
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Post</h1>
                    <div className="form-group">
                        <label>Title:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <textarea 
                        className="form-control" 
                        value={author} 
                        onChange={(event)=>{setAuhtor(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Published year</label>
                        <textarea 
                        className="form-control" 
                        value={publishedYear} 
                        onChange={(event)=>{setPublishedYear(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <textarea 
                        className="form-control" 
                        value={genre} 
                        onChange={(event)=>{setGenre(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default EditBooks;
