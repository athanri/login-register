import './App.css';

function App() {
  function handleClick(e) {
    e.preventDefault();
    alert('Hello.');
  }

  return (
    <div className="App">
      <h1>Hello John!</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
