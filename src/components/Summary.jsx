import data from '../data.json'
import Attributes from './Attributes'

const Summary = () => {
  return (
    <div
      className='
            flex
            flex-col
            bg-white
            w-[350px]
            h-[480px]
            text-center
            rounded-2xl
            py-8
            shadow-2xl
            shadow-blue-400
            -ml-6
            items-start
            pl-14'
    >
      <h1 className='
                font-semibold
                text-xl
                text-slate-800
                mb-2
            '>
        Summary
      </h1>
      <div>
        {data.map((item) => (
          <Attributes key={item.category} {...item} />
        ))}
      </div>
      <button
        className='
            bg-gradient-to-b
            from-blue-600
            to-violet-700
            w-[250px]
            py-3
            mt-3
            rounded-full
            text-white'
      >
        Continue
      </button>
    </div>
  )
}

export default Summary