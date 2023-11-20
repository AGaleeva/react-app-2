import Button from './components/Button';
import './App.css';

function App() {

  const numbers = [1, 2, 3, 4, 5];

  const inputs = numbers.map((value) => {
    return <input placeholder = {value} />
  });


  return (
    <div className="App">
      {inputs}
      <div className="button-control">
        <Button type="submitt" name="submit" />
      </div>
      <div className="button-control">
        <Button type="submitt">create order</Button>
      </div>
      <div className="button-control">
        <Button>place order</Button>
      </div>
    </div>
  );
}

export default App;
