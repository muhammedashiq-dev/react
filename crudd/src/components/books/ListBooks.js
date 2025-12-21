import axios from 'axios';
import {Link} from 'react-router-dom';

function ListBooks(props) {
    function deletePost() {
        axios.delete('https://worksheet-library.mashupstack.com/books/'+props.book.id).then(response =>{
            alert(response.data.message);
            props.refresh();
    })
    }

    return (
        <div className='card'>
            <div className='card-body'>
                {props.book.title}
                <Link to={"/library/books/"+props.book.id} className='btn btn-primary float-right'>View</Link>
                <Link to={"/library/books/edit/"+props.book.id} className='btn btn-secondary float-right'>Edit</Link>
                <button type='button' className='btn btn-danger float-right' onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
};
export default ListBooks