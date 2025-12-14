import React from 'react';
import {useParams} from 'react-router-dom';

function Hello(){
    const params = useParams();
    return <h1>Hello {params.name}</h1>;
}

export default Hello;