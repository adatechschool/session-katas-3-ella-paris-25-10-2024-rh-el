import './output.css'
import Card from './Card'
import pokemonArray from './script'

function App() {

  return (
    <>
    <div className='bg-slate-950 w-svw h-full '>
      <div className='text-4xl text-white text-center p-20'>pika pika</div>
      <div className='flex flex-wrap justify-center gap-4  '>

      {pokemonArray.map(pokemon => {
        return <Card key={pokemon.name} data={pokemon} />
      })}
      </div>
    </div>
    </>
  )
}

export default App
