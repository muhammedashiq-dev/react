function App() {
    let styleH = {"color":"lightblue"}
    let name = 'Ashiq';
    let age = 20;
    let isStudent = true;
    let Hobbieslist = [];
    const Hobbies = ["reading","Hiking","Coding"]
    for(let i=0;i<Hobbies.length;i++) {
       Hobbieslist.push(<li key={i}>{Hobbies[i]}</li>)
    }

    function button() {
        document.getElementById("msg").innerHTML = "Hello from React! I love my hobbies!";
        document.getElementById("head").style.backgroundColor = "black";
    }

    return(
        <div className="container mt-4">
            <div className="card p-3">
                <h1 id="head" style={styleH}>Personal Information</h1>
                <p><b>Name:</b> {name}</p>
                <p><b>Age:</b> {age}</p>
                <p><b>Student:</b> {isStudent.toString()}</p>
            </div>

            <h3>using for loop</h3>
            <ul>{Hobbieslist}</ul>

            <h3>using map method</h3>
            <ul>{Hobbies.map((item,index) => (<li key={index}>{item}</li>))}</ul>

            <p id="msg">Click the button to see my enthusiasm!</p>
            <button className="btn btn-primary" onClick={button}>Show enthusiasm!</button>
        </div>
    )
}
export default App;
