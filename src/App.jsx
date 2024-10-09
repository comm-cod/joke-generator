
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './components/Joke'

function App() {

  return (
    <>
    <h1 className='font-bold text-green-500 '>Random Joke Generator</h1>
      <Joke />
    </>
  )
}

export default App
