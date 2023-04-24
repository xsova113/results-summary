import './App.css'
import { Results, Summary } from './components'


function App() {

  return (
    <div>
      <div
        className='
          flex
          justify-center
          mt-[15vh]'
      >
        <Results />
        <Summary />
      </div>

      <div className="attribution mt-20 flex justify-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor</a>.
        Coded by <a href="https://threed-portfolio-jvuh.onrender.com/" target='_blank' rel='noreferrer'><span className='font-bold text-slate-600'>&nbsp;<i>George Chang</i></span></a>.
      </div>
    </div>
  )
}

export default App
