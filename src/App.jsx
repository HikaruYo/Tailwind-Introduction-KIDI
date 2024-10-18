import { React } from 'react'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full relative flex items-center justify-center flex-col text-center gap-10 text-white p-52 
        bg-gradient-to-r from-cyan-400 to-emerald-500'
      >
        <h1 className='text-6xl'>Section 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima quibusdam illo soluta possimus assumenda repellat harum dolores quod est.</p>
      </div>
    </>
  )
}

export default App
