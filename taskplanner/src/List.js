import React from 'react'

function List(props) {
    return(
        <div className='mt-3'>
            <ul className='list-group'>
                {props.tasks.map((t,index) => (
                    <li key={index} className='list-group-item'>{t}</li>
                ))}
            </ul>
            <p>{props.msg}</p>
        </div>
    );
};
export default List
