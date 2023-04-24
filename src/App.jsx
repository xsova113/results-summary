import './App.css'
import { Results, Summary } from './components'


function App() {

  return (
    <>
      <div>
        <div
          className='
          flex
          sm:flex-row
          sm:justify-center
          flex-col
          mt-[15vh]
          hanken-grotesk'
        >
          <Results />
          <Summary />
        </div>
      </div>

      <div className="hidden mt-20 sm:flex mx-3 text-center justify-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor</a>.
        Coded by <a href="https://threed-portfolio-jvuh.onrender.com/" target='_blank' rel='noreferrer'><span className='font-bold text-slate-600'>&nbsp;<i>George Chang</i></span></a>.
      </div>
    </>
  )
}

export default App
