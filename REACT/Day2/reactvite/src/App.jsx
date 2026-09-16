import Input from "./Input"
import Card from "./Card"
import "./App.css"

const App = ()=>{
  return (<>

  <div>
    <h1>This is React</h1>
    <p>This is paragraph tag</p>
  </div>

  <Button/>

  <Input/>

  <Card/>

  </>)
}

export default App

const Button = ()=>{
  return (<>

  <div>
    <button>Click Now</button> <br /> <br />
  </div>
  </>)
}