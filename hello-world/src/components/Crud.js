import React, { useState } from "react";
import Navbar from './Navbar';

function Crud() {
    var [ items, setItems ] = useState ([
        { id : 1, name : "John" },
        { id : 2, name : "David" },
        { id : 3, name : "William" }
]);

const [itemName, setItemName ] = useState("");

const [editingItemId, setEditingItemId] = useState(null);
const [editingItemName,setEditingItemName] = useState("");
const [searchTerm,setSearchTerm] = useState("");


const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditingItemName(item.name);
}


const handleInputChange = (event ) => {
    setItemName(event.target.value);
};

const handleSubmit = ( event ) => {
    event.preventDefault();
    var x = items.length+1;
    var newItem = {
        id : x,
        name : itemName
        };
    setItems([...items, newItem]);
    setItemName(" ");
    };

    function handleDelete(id){
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    }

    const handleSaveItem = () => {
        if(editingItemName.trim() !== ""){
            const updatedItems = items.map((item)=>{
                if(item.id === editingItemId){
                    return{...item , name:editingItemName};
                }
                return item;
            });
            setItems(updatedItems);
            setEditingItemId(null);
        }
    }

    const cancelItem = () => {
        setEditingItemId(null);
        setEditingItemName("");
    };
    const searchItem = (event) => {
        event.preventDefault();
        const filteredItems = items.filter((item) => (
            item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ));
        setItems(filteredItems);
    }
return (
    <div>
    <div> <Navbar/> </div><br/>
    <div className = "container ">
      <div className = "row" >
          <div className= "col-md-8">
        <h2>CRUD</h2>
        <form onSubmit={handleSubmit} >
            <label> Enter Name </label>
            <input type="text" value={itemName} onChange={handleInputChange}/>
            <button className="btn btn-small btn-success" type="submit"> Add </button>
        </form>
        </div>
        </div>
        </div><br/>
        <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={searchItem}>
                            <label>Search Name: </label>
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
                            <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
                        </form>
                    </div>
                    </div>
                    </div>
<div className="container">
    <table className =" table table-bordered table-dark">
        <tr>                                            
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Action</th>
        </tr>
        {items.map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>
                {editingItemId === item.id? (
                    <input type="text" value={editingItemName } className="form-control" onChange={(e) => setEditingItemName(e.target.value)}/>
                ):(
                    item.name
                )}
            </td>
            <td>
              <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button></td>
             <td>{editingItemId === item.id ? (
                <>
                <button className="btn btn-primary" onClick={handleSaveItem}>
                    Save
                </button>
                <button className="btn btn-secondary" onClick={cancelItem}>Cancel</button>
                </>
             ) : (
                <>
                <button className="btn btn-primary" onClick={()=>{handleEditItem(item)}}>Edit</button>
                </>
             ) }</td>
        </tr>
        ))}
</table>
</div>
</div>
);
}

export default Crud;

 