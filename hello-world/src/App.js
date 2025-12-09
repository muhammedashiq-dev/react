function handleClick() {
  console.log('Button was clicked!');
}

function App() {
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default App;