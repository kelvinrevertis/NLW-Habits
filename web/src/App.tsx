import './styles/global.css';
import './App.css'
import { Habit } from './components/Habit'

function App() {


  return (
    <div>
    <h1>Hello World</h1>
    <Habit completed={10}/>
    <Habit completed={18}/>
    <Habit completed={37}/>
    </div>

  )
}

export default App
