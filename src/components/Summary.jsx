import data from '../data.json'
import Attributes from './Attributes'

const Summary = () => {
  return (
    <div
      className='
            flex
            flex-col
            bg-white
            sm:w-[350px]
            sm:h-[480px]
            rounded-2xl
            pt-10
            pb-6
            sm:py-8
            sm:shadow-2xl
          sm:shadow-blue-400
            sm:-ml-6
            sm:mt-0
            -mt-6
            sm:items-start
            sm:pl-14
            items-center'
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
            sm:bg-gradient-to-b
          from-blue-600
          to-violet-700
            bg-[#303b59]
            w-[250px]
            py-3
            mt-3
            rounded-full
            text-white
            hanken-grotesk'
      >
        Continue
      </button>
    </div>
  )
}

export default Summary