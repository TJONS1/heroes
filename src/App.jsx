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
      <h1>HEROES</h1>
      <div className='wrapper'>
        {heroes.map(h => <Hero key={h.id} hero={h} />)}
      </div>
    </>
  )
}

export default App
