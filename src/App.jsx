import './App.css'
import Hero from './components/Hero'

function App() {

  const heroes = [
    {id: 1, name: 'Jonas', awesome: 5},
    {id: 2, name: 'Malin', awesome: 5},
    {id: 3, name: 'Anna', awesome: 5},
    {id: 4, name: 'Emil', awesome: 5},
  ]

  return (
    <>
      <h1 className='title'>
        <span style={{"--i":"1"}}>H</span>
        <span style={{"--i":"2"}}>E</span>
        <span style={{"--i":"3"}}>R</span>
        <span style={{"--i":"4"}}>O</span>
        <span style={{"--i":"5"}}>E</span>
        <span style={{"--i":"6"}}>S</span>
        </h1>
      <div className='wrapper'>
        {heroes.map(h => <Hero key={h.id} hero={h} />)}
      </div>
    </>
  )
}

export default App
